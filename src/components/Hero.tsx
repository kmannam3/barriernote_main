import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-slate-50">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-blue/10 rounded-full bg-glow -z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-violet/10 rounded-full bg-glow -z-[1]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue text-sm font-bold mb-8">
          <Sparkles className="w-4 h-4" />
          <span>전환율 최적화 AI 마케팅 솔루션</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
          예쁜 홈페이지가<br />
          아니라 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">돈을 벌어다 주는</span><br />
          페이지를 만듭니다.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          사장님, 이제 홍보 걱정은 AI에게 맡기세요. 데이터 분석과 소비자 심리학이 결합된 고전환 랜딩페이지로 문의가 쏟아지는 기적을 경험하세요.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white text-lg font-bold px-8 py-7 rounded-2xl w-full sm:w-auto shadow-lg shadow-brand-blue/20">
            무료 AI 마케팅 진단 받기
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold text-lg px-8 py-7 rounded-2xl w-full sm:w-auto">
            제작 사례 보기
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { label: "평균 전환율 상승", value: "300%+" },
            { label: "AI 맞춤 카피라이팅", value: "자동화" },
            { label: "광고비 절감 효과", value: "40%+" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.value}</span>
              <span className="text-sm font-bold text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Visual Mockup - High Quality Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-20 w-full max-w-5xl group"
      >
        <div className="glass-card p-2 md:p-4 perspective-1000 bg-white border-slate-200">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/9]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="AI Marketing Dashboard" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating UI Elements over image to make it look like a real app */}
            <div className="absolute top-6 left-6 z-20 space-y-2 hidden md:block">
              <div className="glass-card px-4 py-2 flex items-center gap-3 backdrop-blur-xl bg-white/10">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-white tracking-widest uppercase">실시간 전환 분석 중</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-8 z-20 hidden md:block">
              <div className="glass-card p-6 backdrop-blur-xl bg-black/40 border-brand-blue/30 max-w-[240px]">
                <div className="text-brand-blue text-3xl font-black mb-1">94.2%</div>
                <div className="text-white text-sm font-bold mb-2">예상 매출 상승률</div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '94.2%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-full bg-brand-blue shadow-[0_0_10px_#3B82F6]" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
