import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, ClipboardList, Send, User, Building, ExternalLink, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  phone: string;
  businessType: string;
  website: string;
  concern: string;
}

const steps = [
  { id: 1, title: '기본 정보', icon: User, description: '성함과 연락처를 입력해주세요.' },
  { id: 2, title: '업종 정보', icon: Building, description: '운영 중이신 사업의 종류입니다.' },
  { id: 3, title: '분석 대상', icon: ExternalLink, description: '진단할 사이트 주소와 고민을 알려주세요.' },
];

export default function DiagnosisForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: '',
      phone: '',
      businessType: '',
      website: '',
      concern: ''
    }
  });

  const formValues = watch();

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('diagnosis_form_draft');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key as keyof FormData, value as string);
      });
    }
  }, [setValue]);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('diagnosis_form_draft', JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data: FormData) => {
    console.log('Diagnosis Form Submitted:', data);
    localStorage.removeItem('diagnosis_form_draft');
    toast.success('AI 마케팅 진단 신청이 완료되었습니다!', {
      description: '24시간 이내에 전문가가 분석 리포트와 함께 연락드립니다.',
    });
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  if (isSubmitted) {
    return (
      <Card className="glass-card max-w-xl mx-auto text-center p-12 border-brand-blue/50">
        <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
          <Check className="w-10 h-10" />
        </div>
        <CardTitle className="text-3xl mb-4">신청 완료!</CardTitle>
        <CardDescription className="text-lg">
          정재하신 정보를 바탕으로 AI 분석이 시작되었습니다.<br />
          최선을 다해 사장님의 비즈니스를 분석하겠습니다.
        </CardDescription>
        <Button className="mt-8 bg-brand-blue" onClick={() => setIsSubmitted(false)}>
          처음으로 돌아가기
        </Button>
      </Card>
    );
  }

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
          layout
          className="glass-card p-6 md:p-10 border-slate-200 bg-white shadow-2xl relative"
        >
          <div className="flex items-center justify-between mb-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2 flex-1 relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-colors ${
                  currentStep >= step.id ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30' : 'bg-slate-100 text-slate-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold ${currentStep >= step.id ? 'text-slate-900' : 'text-slate-400'}`}>
                  {step.title}
                </span>
                {step.id < steps.length && (
                  <div className={`absolute top-5 left-[50%] w-full h-[2px] -z-0 ${
                    currentStep > step.id ? 'bg-brand-blue' : 'bg-slate-100'
                  }`} />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-900 font-bold">성함 / 대표자명</Label>
                    <Input id="name" placeholder="홍길동" {...register('name', { required: true })} className="bg-slate-50 border-slate-200 text-slate-900 font-medium py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-900 font-bold">연락처</Label>
                    <Input id="phone" placeholder="010-0000-0000" {...register('phone', { required: true })} className="bg-slate-50 border-slate-200 text-slate-900 font-medium py-6" />
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className="text-slate-900 font-bold">업종</Label>
                    <Select onValueChange={(val) => setValue('businessType', val)} defaultValue={formValues.businessType}>
                      <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900 font-medium h-12">
                        <SelectValue placeholder="업종을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurant">음식점/카페</SelectItem>
                        <SelectItem value="beauty">미용/에스테틱</SelectItem>
                        <SelectItem value="education">교육/학원</SelectItem>
                        <SelectItem value="service">전문 서비스/상담</SelectItem>
                        <SelectItem value="shopping">쇼핑몰/커머스</SelectItem>
                        <SelectItem value="other">기타</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-slate-900 font-bold">현재 사이트 주소 (없을 경우 생략)</Label>
                    <Input id="website" placeholder="https://example.com" {...register('website')} className="bg-slate-50 border-slate-200 text-slate-900 font-medium py-6" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="concern" className="text-slate-900 font-bold">마케팅 고민 사항</Label>
                    <Textarea 
                      id="concern" 
                      placeholder="예) 인스타그램 광고는 하는데 문의가 안와요." 
                      {...register('concern', { required: true })} 
                      className="bg-slate-50 border-slate-200 text-slate-900 font-medium min-h-[100px]" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex gap-4 mt-10">
              {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1 border-slate-200 text-slate-600 font-bold h-12">
                  이전 단계
                </Button>
              )}
              {currentStep < steps.length ? (
                <Button type="button" onClick={nextStep} className="flex-1 bg-brand-blue text-white font-bold h-12 shadow-lg shadow-brand-blue/20">
                  다음 단계
                </Button>
              ) : (
                <Button type="submit" className="flex-1 bg-gradient-to-r from-brand-blue to-brand-violet text-white font-black h-12 shadow-xl shadow-brand-blue/20">
                  <Send className="w-4 h-4 mr-2" />
                  무료 진단 신청하기
                </Button>
              )}
            </div>
            
            <p className="text-center text-xs text-slate-400 mt-4 font-bold">
              * 기재하신 정보는 분석 및 연락 목적으로만 사용되며 안전하게 보호됩니다.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
