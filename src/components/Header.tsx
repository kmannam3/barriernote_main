import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-200"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-lg flex items-center justify-center font-bold text-white text-xs">
          BN
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">베리어<span className="text-brand-blue">노트</span></span>
      </div>
      
      <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a href="#features" className="hover:text-foreground transition-colors">주요기능</a>
        <a href="#process" className="hover:text-foreground transition-colors">준비과정</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">요금제</a>
        <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
      </nav>
      
      <div className="flex items-center gap-4">
        <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white rounded-full px-6">
          <MessageCircle className="w-4 h-4 mr-2" />
          무료 진단 받기
        </Button>
      </div>
    </motion.header>
  );
}
