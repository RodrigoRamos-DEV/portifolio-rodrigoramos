// src/app/page.tsx

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';   // 1. Importe aqui
import { Footer } from '@/components/Footer';     // 2. Importe aqui
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact /> {/* 3. Adicione aqui */}
      </main>
      <Footer /> {/* 4. E o Footer aqui, fora do main */}
    </>
  );
}