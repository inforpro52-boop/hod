import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { AboutSection } from './components/AboutSection';
import { JuristeSection } from './components/JuristeSection';
import { AutriceSection } from './components/AutriceSection';
import { EngagementsSection } from './components/EngagementsSection';
import { NewsSection } from './components/NewsSection';
import { AgendaSection } from './components/AgendaSection';
import { GallerySection } from './components/GallerySection';
import { PressSection } from './components/PressSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [contactSubject, setContactSubject] = useState<string>('');

  // ScrollSpy to keep current section active in navigation
  useEffect(() => {
    const sectionIds = [
      'hero',
      'introduction',
      'a-propos',
      'juriste',
      'autrice',
      'engagements',
      'actualites',
      'agenda',
      'galerie',
      'presse',
      'contact',
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const scrollToContact = (subject?: string) => {
    if (subject) {
      setContactSubject(subject);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#20252B] selection:bg-[#C9A45C]/30 selection:text-[#0B1F33]">
      {/* Sticky Header with Navigation & Progress */}
      <Header
        onNavigateToContact={() => scrollToContact()}
        activeSection={activeSection}
      />

      {/* Main Page Layout */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero
          onDiscoverJourney={() => scrollToSection('a-propos')}
          onDiscoverBooks={() => scrollToSection('autrice')}
        />

        {/* 2. Introduction Section: 3 Pillars */}
        <IntroductionSection />

        {/* 3. À Propos Section */}
        <AboutSection />

        {/* 4. Section Juriste */}
        <JuristeSection
          onConsultProject={(domainName) => {
            const subject = domainName
              ? `Projet Juridique : ${domainName}`
              : 'Projet Juridique & Accompagnement Stratégique';
            scrollToContact(subject);
          }}
        />

        {/* 5. Section Autrice */}
        <AutriceSection />

        {/* 6. Section Engagements & Projets */}
        <EngagementsSection
          onInitiateProject={() => scrollToContact("Partenariat d'Engagement, Jeunesse & Mentorat")}
        />

        {/* 7. Section Actualités & Réflexions */}
        <NewsSection />

        {/* 8. Section Agenda & Rencontres */}
        <AgendaSection
          onContactEvent={(eventTitle) =>
            scrollToContact(`Participation à l'événement : ${eventTitle}`)
          }
        />

        {/* 9. Section Galerie & Lightbox */}
        <GallerySection />

        {/* 10. Section Presse & Médias */}
        <PressSection />

        {/* 11. Section Contact & Prise de Rendez-vous */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Footer with Legal Notice & Jason_INFORMATIQUE credit */}
      <Footer />

      {/* Floating UX buttons: WhatsApp and Back-To-Top */}
      <FloatingActions />
    </div>
  );
}
