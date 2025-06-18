import React, { useEffect, useState } from 'react';

function getNextTargetDate() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  if (month > 11) {
    month = 0;
    year += 1;
  }
  return new Date(year, month, 18, 12, 0, 0);
}

function getTimeLeft(target) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}

export default function CountdownNotifyCard() {
  const [target] = useState(getNextTargetDate());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(target));
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('https://medicoplus-coming-soon.onrender.com/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.status === 409) {
        setError('This email has already joined.');
        return;
      }
      if (!res.ok) throw new Error('Failed to save email');
      setSubmitted(true);
      setSuccess('You will be notified!');
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
        setSuccess('');
      }, 3000);
    } catch (err) {
      setError('Could not save email. Try again.');
    }
  }

  return (
    <div className="w-full max-w-md sm:max-w-lg bg-white/90 backdrop-blur-glass border border-mp-blue-light shadow-2xl rounded-3xl p-6 sm:p-10 md:p-14 flex flex-col items-center animate-fade-in-up z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-mp-blue-dark mb-6 sm:mb-8 md:mb-10 text-center tracking-wide drop-shadow-lg">Launching In</h2>
      <div className="flex flex-row flex-nowrap justify-center gap-4 sm:gap-6 md:gap-8 w-full mb-8 sm:mb-10 md:mb-12">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center bg-mp-blue-dark/90 rounded-2xl px-5 sm:px-7 md:px-8 py-5 sm:py-6 md:py-7 shadow-xl min-w-[70px] sm:min-w-[90px] transition-transform duration-300 hover:scale-105"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-pulse">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold mt-2 tracking-widest text-mp-blue-light uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="font-semibold text-mp-blue-dark text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-center drop-shadow">Get Notified</div>
      <div className="text-mp-blue-dark text-base sm:text-lg mb-4 sm:mb-6 text-center font-medium">
        Be the first to experience the future of healthcare
      </div>
      <form
        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="rounded-lg px-4 sm:px-5 py-2 sm:py-3 border border-mp-blue-light bg-white text-mp-blue-dark placeholder-mp-blue focus:outline-none focus:ring-2 focus:ring-mp-blue-light w-full text-base sm:text-sm backdrop-blur-glass shadow"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={submitted}
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-mp-blue-dark hover:bg-mp-blue text-white font-semibold rounded-lg py-2 sm:py-3 px-6 sm:px-8 transition w-full sm:w-auto text-base sm:text-lg shadow-lg whitespace-nowrap"
          disabled={submitted}
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
          </svg>
          {submitted ? "Thank you!" : "Notify Me"}
        </button>
      </form>
      {success && <p className="text-green-600 mt-2">{success}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <p className="text-xs sm:text-sm text-mp-blue-dark text-center mt-2 sm:mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}