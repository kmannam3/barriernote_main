import React from 'react';
import { motion } from 'motion/react';
import { Check, ClipboardList, ExternalLink } from 'lucide-react';

export default function DiagnosisForm() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc5oLDk1JpMJFR6xVA3Y8u006KRA-D4S9uaPk1AieqVFaWFoQ/viewform?fbzx=-2137932527351954253";

  return (
    <section id="diagnosis" className="py-24 px-6 md:px-12 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/5 rounded-full bg-glow -z-[1]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-blue/10 text-brand-blue font-bold text-sm">
            <ClipboardList className="w-4 h-4" />
            무료 이벤트 진행 중
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
            내 홈페이지는 왜<br /> 
            <span className="text-brand-blue">문의가 없을까?</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            300개 이상의 업체를 성공시킨 AI 마케팅 분석 툴을 통해 현재 웹사이트의 수익 구조를 무료로 진단해드립니다.
          </p>
          
          <div className="space-y-6">
            {[
              "300개 이상의 지표 기반 전문 분석",
              "경쟁 업체 페이지와 데이터 비교",
              "전환율을 높이는 핵심 카피 가이드 제공",
              "업종별 1:1 맞춤형 컨설팅 리포트"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-slate-700 font-bold">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                 alt="AI Analysis Preview"
                 className="rounded-xl opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-black text-brand-blue flex items-center gap-2 shadow-xl border border-brand-blue/20">
                   <div className="w-2 h-2 rounded-full bg-brand-blue animate-ping" />
                   AI 분석 리포트 샘플
                 </div>
               </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <a 
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="glass-card p-6 md:p-10 border-slate-200 bg-white shadow-2xl relative transition-all duration-300 group-hover:border-brand-blue/30 group-hover:shadow-brand-blue/10 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ExternalLink className="w-24 h-24 text-brand-blue" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-blue/20">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">무료 진단 폼 작성하기</h3>
                    <p className="text-sm text-slate-500 font-bold">1분이면 신청 완료됩니다.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-5 rounded-xl border-2 border-slate-50 bg-slate-50/50 group-hover:border-brand-blue/10 transition-colors">
                    <div className="text-xs font-black text-slate-400 mb-1">STEP 01</div>
                    <div className="text-lg font-black text-slate-700">기본 정보 및 연락처 확인</div>
                  </div>
                  <div className="p-5 rounded-xl border-2 border-slate-50 bg-slate-50/50 group-hover:border-brand-blue/10 transition-colors">
                    <div className="text-xs font-black text-slate-400 mb-1">STEP 02</div>
                    <div className="text-lg font-black text-slate-700">업종 및 타겟 고객 분석</div>
                  </div>
                  <div className="p-5 rounded-xl border-2 border-slate-50 bg-slate-50/50 group-hover:border-brand-blue/10 transition-colors">
                    <div className="text-xs font-black text-slate-400 mb-1">STEP 03</div>
                    <div className="text-lg font-black text-slate-700">마케팅 고민 상세 기술</div>
                  </div>
                </div>

                <div className="mt-10">
                  <div className="w-full bg-gradient-to-r from-brand-blue to-brand-violet text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-brand-blue/20 group-hover:scale-[1.02] transition-transform">
                    구글폼으로 이동하여 진단 신청하기
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-center text-xs text-slate-400 mt-6 font-bold">
                  * 클릭 시 정식 문의 폼(Google Forms)으로 안전하게 이동합니다.
                </p>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
