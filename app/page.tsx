import { Header } from '@/components/header';
import { Hero } from '@/components/about_us';
import { Services } from '@/components/services';
import { CaseStudies } from '@/components/case-studies';
import { Testimonials } from '@/components/testimonials';
import { Stats } from '@/components/stats';
import { Team } from '@/components/team';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Services />
      {/*<CaseStudies />*/}
      {/* <Testimonials /> */}
      <Stats />
      {/*<Team />*/}
      <Contact />
      <Footer />
    </main>
  );
}