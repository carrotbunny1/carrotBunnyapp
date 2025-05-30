"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export function Team() {
  const teamRef = useRef<HTMLDivElement>(null);

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

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  const team = [
    {
      name: "Akash Gautam",
      position: "Manager",
      bio: "-",
      image: "../images/team/akash.jpg"
    },
    {
      name: "Kanishk Jayant",
      position: "Brand Manager",
      bio: "Influencer",
      image: "../images/team/kanishk.jpg"
    },
    {
      name: "Bipul Singh",
      position: "Talent Manger",
      bio: "-",
      image: "../images/team/bipul.jpg"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div 
        ref={teamRef}
        className="container mx-auto px-4 opacity-0 transition-opacity duration-700"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a diverse team of marketing experts, data analysts, and creative strategists passionate about connecting brands with the right influencers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-background hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm mb-2">{member.position}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}