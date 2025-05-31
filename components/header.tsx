"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Carrot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isCreatorsPage = pathname === '/creators';

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
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Carrot className="h-7 w-7 text-orange-500" />
          <span className="font-bold text-xl tracking-tight">
            <span className="text-orange-500">Carrot</span>Bunny
          </span>
        </Link>

        {!isCreatorsPage && (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLinks />
              <Button 
                size="sm" 
                variant="default" 
                className="bg-orange-500 hover:bg-orange-600"
                onClick={scrollToContact}
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={cn(
                  "block h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )}></span>
                <span className={cn(
                  "block h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "block h-0.5 bg-foreground transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}></span>
              </div>
            </button>
          </>
        )}

        {isCreatorsPage && (
          <Button 
            size="sm" 
            variant="default" 
            className="bg-orange-500 hover:bg-orange-600"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        )}
      </div>

      {/* Mobile Navigation */}
      {!isCreatorsPage && (
        <div className={cn(
          "md:hidden absolute w-full bg-background/95 backdrop-blur-sm transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[300px] shadow-md" : "max-h-0"
        )}>
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <NavLinks mobile onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <Button 
              size="sm" 
              variant="default" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => {
                scrollToContact();
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ mobile = false, onClick = () => {} }) {
  const navItems = [
    { label: 'Services', href: '#services' },
/*    { label: 'Case Studies', href: '#case-studies' },*/
    { label: 'Creators', href: '/creators' }, 
    { label: 'About Us', href: '#team' },
/*    { label: 'Contact', href: '#contact' }, */
  ];

  return navItems.map((item) => (
    <Link 
      key={item.label} 
      href={item.href}
      className={cn(
        "text-foreground/80 hover:text-foreground font-medium transition-colors",
        mobile ? "py-2" : ""
      )}
      onClick={onClick}
    >
      {item.label}
    </Link>
  ));
}