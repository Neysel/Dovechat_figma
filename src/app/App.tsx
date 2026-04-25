import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Integrations } from "./components/Integrations";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Toaster } from "./components/Toaster";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Integrations />
          <Pricing />
          <CTA />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}
