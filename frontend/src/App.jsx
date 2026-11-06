import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import MessageBand from './components/MessageBand.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Treatments from './components/Treatments.jsx';
import Consultation from './components/Consultation.jsx';
import Tips from './components/Tips.jsx';
import HoursLocation from './components/HoursLocation.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import useReveal from './hooks/useReveal.js';
import useHashScroll from './hooks/useHashScroll.js';

export default function App() {
  useReveal();
  useHashScroll();

  return (
    <>
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <MessageBand />
        <WhyChoose />
        <Treatments />
        <Consultation />
        <Tips />
        <HoursLocation />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
