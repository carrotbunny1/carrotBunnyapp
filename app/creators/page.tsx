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
      name: "Kanishk Jayant",
      handle: "@kanishkjayant",
      image: "../images/Creators/kanishk.jpg",
      social: {
        instagram: "126K",
        link: "https://www.instagram.com/kanishkjayant/"
      }
    },
    {
      name: "Ashish Verma",
      handle: "@ashishverma___",
      image: "../images/Creators/ashishverma.jpg",
      social: {
        instagram: "179K",
        link: "https://www.instagram.com/ashishverma___/"
      }
    },
    {
      name: "Rupali Chetwani",
      handle: "@traveogram",
      image: "../images/Creators/rupalichetwani.jpg",
      social: {
        instagram: "80.5K",
        link: "https://www.instagram.com/traveogram/"
      }
    },
    {
      name: "Debajit Das",
      handle: "@nitin_vlogs_",
      image: "../images/Creators/nitinvlogs.jpg",
      social: {
        instagram: "1.5M",
        link: "https://www.instagram.com/nitin_vlogs_/"
      }
    },
    {
      name: "Sukhjit_Karan vlogs",
      handle: "@sardarni.sukhjit",
      image: "../images/Creators/",
      social: {
        instagram: "112K",
        link: "https://www.instagram.com/sardarni.sukhjit/"
      }
    },
    {
      name: "Angad Johar",
      handle: "@joharangad",
      image: "../images/Creators/angadjohar.jpg",
      social: {
        instagram: "105K",
        link: "https://www.instagram.com/joharangad/"
      }
    },
    {
      name: "Ajay Kumar",
      handle: "@soulfulvlogs07",
      image: "../images/Creators/ajaykumar.jpg",
      social: {
        instagram: "273K",
        link: "https://www.instagram.com/soulfulvlogs07/"
      }
    },
    {
      name: "Poonam Yadav",
      handle: "@yogawithpoonam",
      image: "../images/Creators/poonamyadav.jpg",
      social: {
        instagram: "337K",
        link: "https://www.instagram.com/yogawithpoonam/"
      }
    },
    {
      name: "Kashish Soni",
      handle: "@tasty_trekk",
      image: "../images/Creators/kashishsoni.jpg",
      social: {
        instagram: "45.8K",
        link: "https://www.instagram.com/tasty_trekk/"
      }
    },
    {
      name: "Mialn Singhal",
      handle: "@bytetrails",
      image: "../images/Creators/milansinghal.jpg",
      social: {
        instagram: "201K",
        link: "https://www.instagram.com/bytetrails"
      }
    },
    {
      name: "Amir Sheikh",
      handle: "@nagpur_xfactor_",
      image: "../images/Creators/amirsheikh.jpg",
      social: {
        instagram: "347K",
        link: "http://instagram.com/nagpur_xfactor_"
      }
    },
    {
      name: "Prajjawal Prajapati",
      handle: "@streets.of.prayagraj",
      image: "../images/Creators/prajjawalprajapati.jpg",
      social: {
        instagram: "1M",
        link: "https://www.instagram.com/streets.of.prayagraj"
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {creators.map((creator, index) => (
              <motion.div
                key={creator.handle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-[4/5] relative">
                      <img
                        src={creator.image}
                        alt={creator.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="p-1 mx-[10px]">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="text-xl font-bold">{creator.name}</h3>
                          <p className="text-orange-500">{creator.handle}</p>
                        </div>
                        <div className="flex gap-2 h-full flex items-center">
                          <p className="font-bold text-orange-500 ">{creator.social.instagram}</p>
                          <a href={creator.social.link} className="p-2 hover:bg-orange-100 dark:hover:bg-orange-900/20 rounded-full transition-colors">
                            <Instagram className="h-9 w-9" />
                          </a>
                        </div>
                      </div>

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