import React from 'react';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import ProblemSolution from '@/src/components/ProblemSolution';
import DiagnosisForm from '@/src/components/DiagnosisForm';
import Pricing from '@/src/components/Pricing';
import TrustElements from '@/src/components/TrustElements';
import Footer from '@/src/components/Footer';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue/30 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <ProblemSolution />
        <DiagnosisForm />
        <Pricing />
        <TrustElements />
      </main>
      
      <Footer />
      
      {/* Background Decorative Bloom */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-violet/3 rounded-full blur-[100px]" />
      </div>

      <Toaster position="top-center" richColors />
    </div>
  );
}

