import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { TrendingUp, TrendingDown, CheckCircle2, XCircle } from 'lucide-react';

const data = [
  { name: '기존 홈페이지', value: 1.2, color: '#475569' },
  { name: '베리어노트 솔루션', value: 6.8, color: '#2563EB' },
];

export default function ProblemSolution() {
  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">수치로 증명되는 <span className="text-brand-blue">전환의 차이</span></h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            단순히 방문자만 늘리는 것이 아닙니다. 방문자를 실제 구매 고객으로 변환하는 확률을 극대화합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.5 },
              x: { duration: 0.5 }
            }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 border-slate-200 bg-white shadow-xl shadow-slate-200/50"
          >
            <div className="flex items-center gap-2 mb-8 text-xl font-black text-slate-900">
              <TrendingUp className="text-brand-blue" />
              <span>평균 구매 전환율 비교 (%)</span>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} fontWeight="bold" />
                  <Tooltip 
                    cursor={{ fill: 'rgba(0,0,0,0.02)' }}
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList dataKey="value" position="top" fill="#1e293b" fontWeight="bold" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <p className="mt-8 text-sm text-center text-slate-400 font-bold italic">
              * 당사 솔루션 도입 고객사 평균 데이터 기준 (2024)
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6 p-6 rounded-2xl border border-red-100 bg-red-50/50"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 text-slate-900">기존의 무의미한 홈페이지</h3>
                <ul className="space-y-2 text-slate-500 font-bold">
                  <li>• 너무 많은 정보로 인한 인지적 부하</li>
                  <li>• 모바일 결제 및 상담 신청의 복잡함</li>
                  <li>• 신뢰를 주지 못하는 올드한 디자인</li>
                  <li>• 명확한 CTA(행동 촉구) 부족</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 p-6 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2 text-slate-900">전환형 랜딩페이지 솔루션</h3>
                <ul className="space-y-2 text-slate-700 font-bold">
                  <li>• 소비자 심리학 기반의 원페이지 구성</li>
                  <li>• 1초 만에 완료되는 초간편 AI 상담 폼</li>
                  <li>• 신뢰도를 높이는 증거 중심 레이아웃</li>
                  <li>• 모바일 최적화 및 엄지 인터페이스 적용</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
