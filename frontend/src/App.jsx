import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownNotifyCard from './components/CountdownNotifyCard';
import Footer from './components/Footer';
import MedicalBgIcons from './components/MedicalBgIcons';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-mp-blue-dark via-mp-blue to-mp-blue-light relative overflow-hidden">
      <MedicalBgIcons />
      <Header />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto px-2 sm:px-4 pt-20 pb-8 gap-8 md:gap-12 w-full">
        <section className="w-full md:w-1/2 flex flex-col items-center md:items-end md:pr-8 mb-8 md:mb-0">
          <CountdownNotifyCard />
        </section>
        <section className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <Hero />
        </section>
      </main>
      <Footer />
    </div>
  );
}