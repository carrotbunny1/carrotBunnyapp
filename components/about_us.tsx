"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, MousePointer, Users, BarChart } from 'lucide-react';
import { motion } from '@/lib/motion';

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const statElements = statsRef.current?.querySelectorAll('.stat-item');
    statElements?.forEach((el) => observer.observe(el));

    return () => {
      statElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Elevate Your Brand With <span className="text-orange-500">Influential</span> Partnerships
            </h1>
            
            <p className="text-lg text-muted-foreground md:text-xl md:pr-12">
              Connect with the perfect content creators to grow your brand&apos;s reach, engagement, and revenue with data-driven influencer marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600" onClick={scrollToContact}>
                Start Your Campaign
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Trusted by India&apos;s Top Leading Brands.
            </div>
            
            <div className="flex flex-wrap gap-8 mt-2">
              <img 
                src="../images/Brands/Zing-Bus.svg" 
                alt="ZingBus" 
                className="h-8 dark:invert" 
              />
              <img 
                src="../images/Brands/TECHNOSPORT.svg" 
                alt="TECHNOSPORT" 
                className="h-8 dark:invert" 
              />
              <img 
                src="../images/Brands/zouk.svg" 
                alt="ZOUK" 
                className="h-8 dark:invert" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square md:aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/20 dark:to-background">
              <div className="absolute inset-0 flex items-center justify-center ">
                <img 
                  src="/images/website_logo/carrotbunny.jpeg" 
                  alt="Influencer marketing" 
                  className="object-cover w-full h-full rounded-xl "
                />
              </div>
            </div>
            
            <div 
              ref={statsRef}
              className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 w-[90%] bg-background rounded-xl p-6 shadow-lg grid grid-cols-3 gap-4"
            >
              <div className="stat-item opacity-0 transition-opacity duration-700 delay-100 flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-2">
                  <MousePointer className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-2xl font-bold">📈100M</span>
                <span className="text-xs text-center text-muted-foreground">Audience Reached</span>
              </div>
              
              <div className="stat-item opacity-0 transition-opacity duration-700 delay-300 flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-2">
                  <Users className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-2xl font-bold">1000+</span>
                <span className="text-xs text-center text-muted-foreground">Influencers</span>
              </div>
              
              <div className="stat-item opacity-0 transition-opacity duration-700 delay-500 flex flex-col items-center">
                <div className="p-2.5 rounded-full bg-orange-100 dark:bg-orange-900/20 mb-2">
                  <BarChart className="h-5 w-5 text-orange-500" />
                </div>
                <span className="text-2xl font-bold">90%</span>
                <span className="text-xs text-center text-muted-foreground">Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}