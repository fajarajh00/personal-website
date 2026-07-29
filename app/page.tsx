import { About } from "@/components/sections/about";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { TestimonialsLazy } from "@/components/sections/testimonials-lazy";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BackgroundEffects } from "@/components/ui/background-effects";
import { BackToTop } from "@/components/ui/back-to-top";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { PageTransition } from "@/components/ui/page-transition";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StructuredData } from "@/components/seo/structured-data";

export default function HomePage() {
  return (
    <PageTransition>
      <StructuredData />
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <TestimonialsLazy />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
