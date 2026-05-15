import React from 'react';
import { motion } from 'motion/react';
import { 
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, Search, Settings, ArrowUpRight, Star, Quote, 
  HelpCircle, ChevronRight 
} from 'lucide-react';

const cases = [
  {
    category: "설비",
    title: "대정기공",
    description: "검색 노출 구조 개선 후 신규 거래 문의 유입 증가",
    increase: "180%",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
    link: "https://daejung-gikong-499144391708.asia-east1.run.app/"
  },
  {
    category: "F&B",
    title: "성수동 브런치 카페 '모먼트'",
    description: "인스타그램 광고 최적화 및 예약 시스템 연동으로 주말 대기 시간 200% 증가",
    increase: "215%",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400"
  },
  {
    category: "뷰티/미용",
    title: "강남 '더 클린' 피부과",
    description: "전문 지식 중심의 AI 리포팅 페이지 제작으로 상담 신청 비용 45% 절감",
    increase: "180%",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=400"
  }
];

const process = [
  { id: '01', title: '무료 AI 진단', description: '현재 문제점과 시장 경쟁력을 AI로 분석합니다.', icon: Search },
  { id: '02', title: '맞춤형 기획', description: '사장님의 업종에 맞는 고전환 시나리오를 설계합니다.', icon: Settings },
  { id: '03', title: '전문가 제작', description: '디자인과 카피라이팅이 결합된 솔루션을 구축합니다.', icon: Briefcase },
  { id: '04', title: '성과 최적화', description: '데이터를 보며 전환율이 더 높아지도록 지속 개선합니다.', icon: ArrowUpRight },
];

const faqs = [
  { q: "정말 홈페이지 하나로 매출이 오르나요?", a: "네, 단순히 예쁜 페이지가 아니라 소비자의 구매 심리 단계에 맞춰 정보를 배치하고 행동을 유도(CTA)하기 때문에 평균적으로 3배 이상의 전환율 상승을 경험하십니다." },
  { q: "제작 기간은 얼마나 걸리나요?", a: "기본형은 3일 이내, 고급형은 7일 이내에 완료됩니다. 사장님의 비즈니스 공백이 생기지 않도록 신속하게 처리해 드립니다." },
  { q: "이미 홈페이지가 있는데 바꿀 수 있나요?", a: "기존 홈페이지는 그대로 두시고, 광고용 '랜딩페이지'만 별도로 제작하여 운영하는 것이 마케팅 효율 측면에서 훨씬 유리합니다." },
  { q: "컴퓨터를 잘 몰라도 관리가 가능한가요?", a: "물론입니다. 관리자 페이지를 쉽고 직관적으로 제공해 드리며, 수정이 필요할 경우 저희가 직접 도와드리는 서비스도 포함되어 있습니다." }
];

export default function TrustElements() {
  return (
    <div className="space-y-32 py-24 pb-0 bg-white">
      {/* Case Studies */}
      <section id="cases" className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">성공은 <span className="text-brand-blue">결과의 데이터</span>로 말합니다.</h2>
              <p className="text-slate-600 text-lg font-bold">
                다양한 업종의 사장님들이 베리어노트와 함께 새로운 비즈니스 성장을 일궈내고 있습니다.
              </p>
            </div>
            <Button variant="link" className="text-brand-blue p-0 h-auto font-black text-lg group">
              전체 사례 보기 <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((item, i) => {
              const CardContent = (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-xl border border-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="bg-brand-blue text-white text-[10px] font-black px-2 py-1 rounded">문의 {item.increase} 증가</span>
                    </div>
                  </div>
                  <div className="text-xs font-black text-brand-blue mb-2 uppercase tracking-tight">{item.category}</div>
                  <h3 className="text-xl font-black mb-2 text-slate-900 group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  <p className="text-slate-500 font-bold text-sm line-clamp-2">{item.description}</p>
                </motion.div>
              );

              return item.link ? (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  {CardContent}
                </a>
              ) : (
                <div key={i}>{CardContent}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative px-6 md:px-12 py-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue/0 via-brand-blue/50 to-brand-blue/0" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-1000">성공을 위한 <span className="text-brand-blue">4단계 과정</span></h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-bold">복잡한 절차 없이, 사장님은 비즈니스에만 집중하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white p-8 h-full rounded-2xl border border-slate-200 hover:border-brand-blue/30 transition-all group shadow-sm hover:shadow-xl">
                  <div className="text-5xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-slate-200 transition-colors">
                    {step.id}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black mb-2 text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-500 font-bold">{step.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-black mb-8 border border-yellow-500/20">
            <Star className="w-4 h-4 fill-current" />
            <span>실제 고객 후기 4.9/5.0</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-slate-900">동네 사장님들이 <span className="text-brand-violet">추천하는 이유</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "홈페이지 만들고 나서 신규 손님이 2배 이상 늘었어요. AI가 분석해주니까 내 사업의 장점이 뭔지 명확하게 보이더라고요. 가격 대비 성능 최고입니다.",
                author: "김철수 (카페 사장님)",
                stars: 5
              },
              {
                text: "광고비는 엄청 쓰는데 문의가 없어서 고민이었는데, 랜딩페이지 바꾸고 나서 상담 전화가 끊이질 않아요. 왜 진작 안 했나 싶습니다.",
                author: "이영희 (필라테스 스튜디오 원장님)",
                stars: 5
              }
            ].map((testi, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 text-left relative overflow-hidden rounded-3xl border border-slate-200"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-900/5 rotate-180" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testi.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 mb-8 font-black leading-relaxed italic">"{testi.text}"</p>
                <div className="text-sm font-black text-slate-900">— {testi.author}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 md:px-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-500 font-bold text-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>자주 묻는 질문</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">궁금한 점이 <br className="md:hidden" /><span className="text-brand-blue">있으신가요?</span></h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-slate-200 rounded-xl px-6 shadow-sm">
                <AccordionTrigger className="text-lg font-black text-slate-900 hover:no-underline py-6 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-bold text-base pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
