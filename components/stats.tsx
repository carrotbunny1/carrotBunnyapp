"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, BarChart3, Zap, Award } from 'lucide-react';

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    {
      icon: <Users className="h-6 w-6 text-black-500" />,
      value: "1000+",
      label: "Influencers in Network",
      delay: 0
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-black-500" />,
      value: "20+",
      label: "Successful Campaigns",
      delay: 200
    },
    {
      icon: <Zap className="h-6 w-6 text-black-500" />,
      value: "100M+",
      label: "Audience Reached",
      delay: 400
    },
    {
      icon: <Award className="h-6 w-6 text-black-500" />,
      value: "90%",
      label: "Success Rate",
      delay: 600
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact by the Numbers</h2>
          <p className="max-w-2xl mx-auto opacity-90">
            We&apos;ve helped brands of all sizes amplify their message and connect with audiences that matter.
          </p>
        </div>

        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div 
                  className="text-3xl lg:text-4xl font-bold mb-2"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease, transform 0.5s ease`,
                    transitionDelay: `${stat.delay}ms`
                  }}
                >
                  {stat.value}
                </div>
                <p className="text-sm opacity-90">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}