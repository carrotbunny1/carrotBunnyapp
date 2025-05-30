"use client";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Twitter, Youtube, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from '@/lib/motion';

export default function CreatorsPage() {
  const creators = [
    {
      name: "Ashish Verma",
      handle: "@ashishverma___",
      category: "Travel",
      image: "https://www.instagram.com/p/DKETnEwhYhF/?utmsource=ig_web_copy_link&igsh=MzRlODBiWFlZA==",
      stats: {
        followers: "-",
        engagement: "-",
        growth: "-"
      },
      description: "-",
      social: {
        instagram: "https://www.instagram.com/ashishverma___",
        youtube: "-",
        twitter: "-"
      }
    },
    {
      name: "-",
      handle: "-",
      category: "-",
      image: "-",
      stats: {
        followers: "-",
        engagement: "-%",
        growth: "-%"
      },
      description: "-",
      social: {
        instagram: "-",
        youtube: "-",
        twitter: "-"
      }
    },
    {
      name: "-",
      handle: "-",
      category: "-",
      image: "-",
      stats: {
        followers: "-",
        engagement: "-%",
        growth: "-%"
      },
      description: "-",
      social: {
        instagram: "-",
        youtube: "-",
        twitter: "-"
      }
    },
    {
      name: "-",
      handle: "-",
      category: "-",
      image: "-",
      stats: {
        followers: "-",
        engagement: "-%",
        growth: "-%"
      },
      description: "-",
      social: {
        instagram: "-",
        youtube: "-",
        twitter: "-"
      }
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Featured Content Creators</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our top-performing influencers who consistently deliver exceptional results and authentic engagement for brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.handle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] relative">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium bg-orange-500 px-3 py-1 rounded-full inline-block">
                          {creator.category}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{creator.name}</h3>
                          <p className="text-orange-500">{creator.handle}</p>
                        </div>
                        <div className="flex gap-2">
                          <a href={creator.social.instagram} className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-full transition-colors">
                            <Instagram className="h-5 w-5" />
                          </a>
                          <a href={creator.social.youtube} className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-full transition-colors">
                            <Youtube className="h-5 w-5" />
                          </a>
                          <a href={creator.social.twitter} className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-full transition-colors">
                            <Twitter className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{creator.description}</p>
                      
                     {/* <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <Users className="h-5 w-5 mx-auto mb-2 text-orange-500" />
                          <p className="font-bold">{creator.stats.followers}</p>
                          <p className="text-xs text-muted-foreground">Followers</p>
                        </div>
                        <div className="text-center">
                          <Award className="h-5 w-5 mx-auto mb-2 text-orange-500" />
                          <p className="font-bold">{creator.stats.engagement}</p>
                          <p className="text-xs text-muted-foreground">Engagement</p>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="h-5 w-5 mx-auto mb-2 text-orange-500" />
                          <p className="font-bold">{creator.stats.growth}</p>
                          <p className="text-xs text-muted-foreground">Monthly Growth</p>
                        </div>
                      </div>*/}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}