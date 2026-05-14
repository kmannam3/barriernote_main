import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const plans = [
  {
    name: "기본형 (스타터)",
    icon: Zap,
    price: "490,000",
    description: "초기 비즈니스와 개인 사업자를 위한 핵심 솔루션",
    features: [
      "AI 소비자 심리 분석",
      "고전환 1페이지 구성",
      "반응형 모바일 최적화",
      "카카오톡 상담 연동",
      "기본 SEO 최적화",
      "제작 기간 3일"
    ],
    highlight: false
  },
  {
    name: "고급형 (프로)",
    icon: Rocket,
    price: "990,000",
    description: "매출 성장을 가속화하고 싶은 사업자를 위한 패키지",
    features: [
      "스타터 모든 기능 포함",
      "AI 카피라이팅 5종 제공",
      "A/B 테스트 초기 세팅",
      "리드 수집 자동화 (DB)",
      "구글/메타 광고 픽셀 심기",
      "제작 기간 7일"
    ],
    highlight: true
  },
  {
    name: "구독형 (매체 대행)",
    icon: Building2,
    price: "월 300,000",
    description: "홈페이지 제작부터 광고 관리까지 통합 운영",
    features: [
      "랜딩페이지 무제한 수정",
      "광고 매체 직접 운영 관리",
      "월간 AI 성과 분석 리포트",
      "이벤트 페이지 매월 제작",
      "전담 마케터 배정",
      "연간 계약 시 할인가 적용"
    ],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">합리적인 비용으로 <span className="text-brand-violet">매출의 변화</span>를</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-bold">
            소상공인 사장님들의 부담을 줄였습니다. 거품을 뺀 정직한 가격으로 최고의 효율을 약속합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`h-full flex flex-col bg-white border-2 overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.highlight ? 'border-brand-blue shadow-xl shadow-brand-blue/10' : 'border-slate-200'
              }`}>
                {plan.highlight && (
                  <div className="absolute top-0 right-0 py-1.5 px-4 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest z-10">
                    가장 많이 선택함
                  </div>
                )}
                
                <CardHeader className="p-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm ${
                    plan.highlight ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-900'
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-slate-900 font-black">{plan.name}</CardTitle>
                  <CardDescription className="mb-6 text-slate-500 font-bold leading-relaxed">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900 tracking-tight">₩{plan.price}</span>
                    <span className="text-slate-400 text-sm font-bold">{plan.price.includes('월') ? '' : '부터'}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 pt-0 flex-grow bg-slate-50/30">
                  <ul className="space-y-4 py-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-bold">
                        <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-8 bg-white border-t border-slate-100">
                  <Button className={`w-full py-7 rounded-xl font-black text-lg transition-all ${
                    plan.highlight 
                      ? 'bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg shadow-brand-blue/20' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}>
                    시작하기
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
