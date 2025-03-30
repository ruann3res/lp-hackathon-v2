import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import {Methodology} from '@/components/Methodology';
import {Testimonials} from '@/components/Testimonials';
import {FAQ} from '@/components/FAQ';
import {Footer} from '@/components/Footer';
import {CallToAction} from '@/components/CTA';
const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
  
      if (!anchor) return;
  
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#') || href.length <= 1) return;
  
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };
  
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Methodology />
        <Testimonials />
        <FAQ />
        <CallToAction/>
      </main>
      <Footer />
    </div>
  );
};

export default Index;