import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle, BookOpen } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-24 pb-12 px-6 md:px-12 bg-black/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-violet rounded-lg flex items-center justify-center font-bold text-white text-[10px]">
                BN
              </div>
              <span className="text-xl font-bold tracking-tight">베리어<span className="text-brand-blue">노트</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              소상공인의 비즈니스 혁신을 위해 데이터와 AI 기술을 결합하여 고전환 랜딩페이지 솔루션을 제공합니다. 예쁜 디자인을 넘어 매출을 만듭니다.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#' },
                { Icon: Facebook, href: '#' },
                { Icon: Mail, href: 'mailto:skh@barrierzone.kr' },
                { Icon: BookOpen, href: 'https://blog.naver.com/barriernote' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue/20 hover:text-brand-blue transition-all border border-white/10"
                >
                  <item.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">주요 서비스</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-brand-blue transition-colors">AI 마케팅 진단</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">고전환 랜딩페이지 제작</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">광고 매체 운영 대행</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">AI 카피라이팅 솔루션</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue" />
                070-8027-1890
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue" />
                skh@barrierzone.kr
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-blue" />
                경기도 시흥시 은계호수로 49 2093호
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">무료 진단 신청</h4>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              지금 신청하면 업종별 30만원 상당의 진단 리포트를 무료로 보내드립니다.
            </p>
            <Button className="w-full bg-brand-blue text-white rounded-xl">
              지금 바로 상담하기
            </Button>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground">
          <div className="space-x-4">
            <span>사업자등록번호: 160-01-02312</span>
            <span>대표: 서경휘</span>
          </div>
          <div>
            &copy; {currentYear} Barrier Note. All rights reserved.
          </div>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
      
      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <Button className="w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-2xl flex flex-col items-center justify-center gap-0.5 border-4 border-background">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold">카톡상담</span>
        </Button>
      </div>
    </footer>
  );
}
