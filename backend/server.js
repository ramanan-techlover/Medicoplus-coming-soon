require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { sendMail } = require('./mail/sendMail');

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB via Mongoose'))
  .catch((err) => console.error('MongoDB connection error:', err));

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});
const Email = mongoose.model('Email', emailSchema);

app.post('/api/notify', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email required' });

  try {
    // Check if email already exists
    const exists = await Email.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Save new email
    await Email.create({ email });

    sendMail(email, 'MedicoPlus Notification', 'Thank you for subscribing to MedicoPlus!', '<h1>Welcome to MedicoPlus</h1><p>Thank you for subscribing!</p>');

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

app.get('/', (req, res) => {
  res.send('MedicoPlus API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});