import Link from 'next/link';
import { Carrot } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Influencer Discovery', href: '#' },
        { label: 'Campaign Management', href: '#' },
        { label: 'Content Strategy', href: '#' },
        { label: 'Analytics & Reporting', href: '#' },
      ],
    },
    {/*{
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Testimonials', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Industry Reports', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },*/}
  ];

  return (
    <footer className="bg-card text-card-foreground pt-16 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12">
          <div className="text-center " >
            <Link href="/" className="flex items-center justify-center gap-2 mb-4">
              <Carrot className="h-7 w-7 text-orange-500" />
              <span className="font-bold text-xl tracking-tight">
                <span className="text-orange-500">Carrot</span>Bunny
              </span>
            </Link>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              CarrotBunny connects brands with the perfect influencers to create authentic partnerships that drive real business results.
            </p>
            {/*
            <div className="flex gap-4">
              <a href="#" className="bg-muted p-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors text-orange-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="bg-muted p-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors text-orange-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.13 4.68 15.85 5.37 16.36C6.06 16.87 6.88 17.15 7.74 17.15C6.16 18.38 4.2 19.03 2.2 19C1.88 19 1.56 18.99 1.25 18.96C3.23 20.15 5.57 20.83 8 20.83C16 20.83 20.33 14.35 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="bg-muted p-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors text-orange-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.8 8.7 6 7.9 6 6.9C6 5.9 6.8 5.1 7.7 5.1C8.7 5.1 9.5 5.9 9.5 6.9C9.5 7.9 8.7 8.7 7.7 8.7ZM18 17H15.5V13.5C15.5 12.7 14.8 12 14 12C13.2 12 12.5 12.7 12.5 13.5V17H10V10H12.5V11.3C12.9 10.7 13.9 10 15 10C16.7 10 18 11.3 18 13V17Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="bg-muted p-2 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors text-orange-500">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 3H6C4.3 3 3 4.3 3 6V18C3 19.7 4.3 21 6 21H18C19.7 21 21 19.7 21 18V6C21 4.3 19.7 3 18 3ZM12 9C13.7 9 15 10.3 15 12C15 13.7 13.7 15 12 15C10.3 15 9 13.7 9 12C9 10.3 10.3 9 12 9ZM18 19H6C5.4 19 5 18.6 5 18V10H6.2C6.1 10.6 6 11.3 6 12C6 15.3 8.7 18 12 18C15.3 18 18 15.3 18 12C18 11.3 17.9 10.6 17.8 10H19V18C19 18.6 18.6 19 18 19ZM18 7C18 7.6 17.6 8 17 8H15C14.4 8 14 7.6 14 7V5C14 4.4 14.4 4 15 4H17C17.6 4 18 4.4 18 5V7Z" fill="currentColor"/>
                </svg>
              </a>
            </div>*/}
          </div>
          
          {/*{footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}*/}
        </div>
        
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-center text-sm text-muted-foreground text-center ">
          <p >© {currentYear} CarrotBunny. All rights reserved.</p>
          {/* <div className="mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div> */}
        </div> 
        
      </div>
    </footer>
  );
}