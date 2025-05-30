"use client";

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronRight } from 'lucide-react';

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('Travel');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-section');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const caseStudies = {
    Travel: {
      title: "Travel",
      subtitle: "Travel Brand",
      metrics: [
        { label: "Increase in Sales", value: "-%" },
        { label: "ROI", value: "-x" },
        { label: "New Followers", value: "-K+" }
      ],
      image: "../images/case_studies/manali.jpeg",
      description: "-"
    },
    fashion: {
      title: "Urban Threads",
      subtitle: "Fashion Retailer",
      metrics: [
        { label: "Engagement Rate", value: "-%" },
        { label: "ROI", value: "-x" },
        { label: "Content Pieces", value: "-+" }
      ],
      image: "../images/case_studies/fashion4.jpeg",
      description: "-"
    },
    tech: {
      title: "EchoTech",
      subtitle: "Smart Home Devices",
      metrics: [
        { label: "Conversion Rate", value: "-%" },
        { label: "ROI", value: "-x" },
        { label: "Content Reach", value: "-M+" }
      ],
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "-"
    },
    food: {
      title: "Fresh Bites",
      subtitle: "Meal Delivery Service",
      metrics: [
        { label: "New Subscribers", value: "-K+" },
        { label: "ROI", value: "-x" },
        { label: "Engagement", value: "-%" }
      ],
      image: "https://images.pexels.com/photos/4050990/pexels-photo-4050990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "-"
    }
  };

  return (
    <section 
      id="case-studies" 
      ref={sectionRef} 
      className="py-20 opacity-0 transition-opacity duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover how we&apos;ve helped brands across different industries achieve remarkable results through strategic influencer partnerships.
          </p>
        </div>

        <Tabs defaultValue="Travel" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1">
              <TabsTrigger 
                value="Travel"
                className={activeTab === 'Travel' ? 'data-[state=active]:bg-orange-500 data-[state=active]:text-white' : ''}
              >
                Travel
              </TabsTrigger>
              
              <TabsTrigger 
                value="fashion"
                className={activeTab === 'fashion' ? 'data-[state=active]:bg-orange-500 data-[state=active]:text-white' : ''}
              >
                Fashion
              </TabsTrigger>

              <TabsTrigger 
                value="tech"
                className={activeTab === 'tech' ? 'data-[state=active]:bg-orange-500 data-[state=active]:text-white' : ''}
              >
                Tech
              </TabsTrigger>

              <TabsTrigger 
                value="food"
                className={activeTab === 'food' ? 'data-[state=active]:bg-orange-500 data-[state=active]:text-white' : ''}
              >
                Food & Beverage
              </TabsTrigger>

            </TabsList>
          </div>

          {Object.entries(caseStudies).map(([key, study]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-1">{study.title}</h3>
                  <p className="text-orange-500 font-medium mb-4">{study.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric) => (
                      <Card key={metric.label}>
                        <CardContent className="p-4 text-center">
                          <p className="text-2xl font-bold text-orange-500">{metric.value}</p>
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="group">
                    View Full Case Study
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <div className="inline-flex items-center gap-2 bg-orange-500 px-3 py-1 rounded-full text-xs font-medium mb-2">
                          Case Study
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}