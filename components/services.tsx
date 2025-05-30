"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, BarChart, Search, MessageSquare, 
  Instagram, TrendingUp, LineChart, ShoppingBag 
} from 'lucide-react';

export function Services() {
  const servicesRef = useRef<HTMLDivElement>(null);

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

    const serviceElements = servicesRef.current?.querySelectorAll('.service-card');
    serviceElements?.forEach((el) => observer.observe(el));

    return () => {
      serviceElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const services = [
    {
      icon: <Users />,
      title: 'Influencer Discovery',
      description: 'Find the perfect influencers that align with your brand values and target audience.'
    },
    {
      icon: <BarChart />,
      title: 'Campaign Analytics',
      description: 'Measure and optimize your influencer marketing ROI with comprehensive performance metrics.'
    },
    {
      icon: <Search />,
      title: 'Audience Insights',
      description: 'Understand influencer audiences with detailed demographic and psychographic analysis.'
    },
    {
      icon: <MessageSquare />,
      title: 'Content Strategy',
      description: 'Develop effective content strategies that resonate with your target audience.'
    },
    {
      icon: <Instagram />,
      title: 'Social Media Management',
      description: 'Coordinate campaigns across multiple platforms to maximize your reach and impact.'
    },
    {
      icon: <TrendingUp />,
      title: 'Growth Hacking',
      description: 'Implement innovative strategies to rapidly grow your brand presence and engagement.'
    },
    {
      icon: <LineChart />,
      title: 'Performance Tracking',
      description: 'Monitor real-time campaign performance and make data-driven adjustments.'
    },
    {
      icon: <ShoppingBag />,
      title: 'Conversion Optimization',
      description: 'Transform influence into sales with conversion-focused campaign strategies.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From discovery to execution, we provide end-to-end influencer marketing solutions to help your brand thrive in the digital landscape.
          </p>
        </div>

        <div 
          ref={servicesRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="service-card opacity-0 transition-all duration-500 hover:shadow-md hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-orange-100 dark:bg-orange-900/20 p-3 w-12 h-12 flex items-center justify-center mb-4 text-orange-500">
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}