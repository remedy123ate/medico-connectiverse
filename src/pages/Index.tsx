
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import AnimatedAppDownload from '../components/AnimatedAppDownload';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AnimatedAppDownload />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
