import Hero from "./components/Hero";
import Services from "./components/Services";
import Analytics from "./components/Analytics";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Hero />
        <Services />
        <Analytics />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
