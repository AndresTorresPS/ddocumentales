'use client';

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Sparkles, Film, Award, Clapperboard, Video, ArrowUpRight, ChevronDown } from 'lucide-react';

const HeroCanvas = dynamic(() => import('@/components/canvas/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#080705] animate-pulse" />,
});

const PROJECTS = [
  {
    title: 'Memorias del Barro',
    category: 'Documental de Autor',
    duration: '84 min',
    awards: 'Selección Oficial Cannes 2025',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Voces de la Selva',
    category: 'Serie Documental',
    duration: '4 Episodios',
    awards: 'Premio del Público',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Micro-Historias Urbanas',
    category: 'TikTok & Social Media High-End',
    duration: 'Viral Series',
    awards: '+5M Reproducciones',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Animaciones ligadas al scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.85]);
  const manifestoY = useTransform(scrollYProgress, [0.15, 0.35], [100, 0]);
  const manifestoOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <div ref={containerRef} className="relative bg-[#080705] text-[#f4efe6] selection:bg-[#d4af37] selection:text-black font-sans overflow-x-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen w-full flex flex-col justify-between p-6 md:p-12 z-10"
      >
        {/* Background 3D */}
        <HeroCanvas />

        {/* Gradientes cinemáticos oscuros para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080705] via-transparent to-[#080705]/80 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#080705]/40 to-[#080705] pointer-events-none z-0" />

        {/* Navbar Header */}
        <header className="relative z-20 flex justify-between items-center max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3">
            {/* Monograma Serif dorado estilo Logo */}
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#120f0a] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.2)]">
              <span className="font-serif font-bold text-xl text-transparent bg-clip-text bg-gradient-to-b from-[#f5d061] via-[#d4af37] to-[#aa7c11]">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.25em] text-[#f4efe6] font-semibold uppercase leading-tight">Documentales</span>
              <span className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-mono">Presenta</span>
            </div>
          </div>

          <nav className="hidden md:flex gap-10 text-xs font-mono tracking-[0.25em] text-[#c5bcad] uppercase">
            <a href="#manifiesto" className="hover:text-[#f5d061] transition-colors">Manifiesto</a>
            <a href="#proyectos" className="hover:text-[#f5d061] transition-colors">Proyectos</a>
            <a href="#servicios" className="hover:text-[#f5d061] transition-colors">Formatos</a>
            <a href="#contacto" className="hover:text-[#f5d061] transition-colors">Contacto</a>
          </nav>
        </header>

        {/* Hero Title & Call to Action */}
        <div className="relative z-20 max-w-4xl mx-auto text-center my-auto space-y-6 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#120f0a]/80 backdrop-blur-md text-xs font-mono text-[#f5d061] tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(212,175,55,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Productora Audiovisual Cinematográfica</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-normal"
          >
            El arte de inmortalizar la <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#f5d061] via-[#d4af37] to-[#996515]">realidad.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base md:text-xl text-[#b0a696] max-w-2xl mx-auto font-light leading-relaxed"
          >
            Largometrajes de autor, series documentales y narrativa vertical para la era digital con estándar cinematográfico.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-5 pt-6"
          >
            <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4af37] via-[#f5d061] to-[#aa7c11] text-black font-semibold rounded-full transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              <Play className="w-4 h-4 fill-current" />
              <span className="text-xs uppercase font-mono tracking-wider">Ver Showreel 2026</span>
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-20 flex justify-between items-end border-t border-[#d4af37]/20 pt-4 text-[10px] text-[#8c8273] font-mono tracking-widest uppercase">
          <span>SELECCIÓN OFICIAL & OBRAS DE AUTOR</span>
          <div className="flex items-center gap-2 animate-bounce text-[#f5d061]">
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </motion.section>

      {/* ===== MANIFIESTO SECTION (SCROLL ANIMATED) ===== */}
      <motion.section 
        id="manifiesto"
        style={{ y: manifestoY, opacity: manifestoOpacity }}
        className="relative z-20 min-h-screen flex items-center justify-center px-6 py-32 bg-[#080705] border-t border-[#d4af37]/20"
      >
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-2 text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">
            <Award className="w-4 h-4" />
            <span>NUESTRO MANIFIESTO</span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#f4efe6] leading-tight font-light">
            "No grabamos imágenes; capturamos el <span className="italic text-[#f5d061] font-serif">alma humana</span> a través de la luz, el silencio y la verdad."
          </h2>

          <p className="text-lg text-[#b0a696] max-w-3xl mx-auto font-light leading-relaxed">
            Unimos la rigurosidad del cine documental tradicional con los lenguajes dinámicos de las nuevas plataformas como TikTok e Instagram, garantizando impacto emocional sin perder el rigor estético.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#2a241a]">
            <div>
              <div className="font-serif text-4xl text-[#f5d061]">12+</div>
              <div className="text-xs font-mono text-[#8c8273] uppercase tracking-widest mt-2">Premios Internacionales</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-[#f5d061]">4K / RAW</div>
              <div className="text-xs font-mono text-[#8c8273] uppercase tracking-widest mt-2">Estándar de Cine</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-[#f5d061]">15M+</div>
              <div className="text-xs font-mono text-[#8c8273] uppercase tracking-widest mt-2">Impacto Digital</div>
            </div>
            <div>
              <div className="font-serif text-4xl text-[#f5d061]">100%</div>
              <div className="text-xs font-mono text-[#8c8273] uppercase tracking-widest mt-2">Historias Reales</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== PROYECTOS SHOWCASE ===== */}
      <section id="proyectos" className="relative z-20 px-6 py-32 bg-[#0d0b08] border-t border-[#2a241a]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">PORTAFOLIO DESTACADO</span>
              <h2 className="font-serif text-4xl md:text-6xl text-[#f4efe6] mt-2">Obras Recientes</h2>
            </div>
            <p className="text-sm text-[#b0a696] max-w-md font-light">
              Explora nuestra selección cinematográfica que abarca desde la gran pantalla hasta formatos digitales virales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden border border-[#d4af37]/20 bg-[#120f0a] transition-all duration-500 hover:border-[#d4af37]/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080705] via-[#080705]/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#080705]/80 backdrop-blur-md text-[10px] font-mono text-[#f5d061] border border-[#d4af37]/30">
                      {project.duration}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 relative z-10 -mt-12">
                  <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-serif text-2xl text-[#f4efe6] group-hover:text-[#f5d061] transition-colors">{project.title}</h3>
                  <p className="text-xs text-[#8c8273] font-mono flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#d4af37]" />
                    {project.awards}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS & FORMATOS ===== */}
      <section id="servicios" className="relative z-20 px-6 py-32 bg-[#080705] border-t border-[#2a241a]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">LÍNEAS DE PRODUCCIÓN</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#f4efe6]">Nuestros Formatos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-[#2a241a] bg-[#0d0b08] hover:border-[#d4af37]/40 transition-all space-y-6">
              <Film className="w-10 h-10 text-[#d4af37]" />
              <h3 className="font-serif text-2xl text-[#f4efe6]">Documentales de Autor</h3>
              <p className="text-sm text-[#b0a696] leading-relaxed font-light">
                Investigación profunda, desarrollo de guion y rodaje cinematográfico enfocado a festivales internacionales y plataformas VOD.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#2a241a] bg-[#0d0b08] hover:border-[#d4af37]/40 transition-all space-y-6">
              <Clapperboard className="w-10 h-10 text-[#d4af37]" />
              <h3 className="font-serif text-2xl text-[#f4efe6]">Largometrajes & Cine</h3>
              <p className="text-sm text-[#b0a696] leading-relaxed font-light">
                Producción ejecutiva, dirección de fotografía y postproducción completa para producciones de ficción y no-ficción de gran escala.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-[#2a241a] bg-[#0d0b08] hover:border-[#d4af37]/40 transition-all space-y-6">
              <Video className="w-10 h-10 text-[#d4af37]" />
              <h3 className="font-serif text-2xl text-[#f4efe6]">Contenido Vertical TikTok</h3>
              <p className="text-sm text-[#b0a696] leading-relaxed font-light">
                Micro-documentales y narrativa de alto rendimiento optimizada para redes sociales, manteniendo calidad de imagen cinematográfica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CALL TO ACTION ===== */}
      <footer id="contacto" className="relative z-20 px-6 py-24 bg-[#050403] border-t border-[#d4af37]/20 text-center space-y-8">
        <span className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase">¿TIENES UNA HISTORIA?</span>
        <h2 className="font-serif text-4xl md:text-6xl text-[#f4efe6] max-w-3xl mx-auto">
          Producemos tu próxima obra maestra
        </h2>
        
        <div className="pt-4">
          <a href="mailto:contacto@ddocumentales.com" className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#d4af37] text-[#f5d061] font-mono text-xs tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all">
            <span>Iniciar Conversación</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="pt-16 border-t border-[#120f0a] flex flex-col md:flex-row justify-between items-center text-xs text-[#8c8273] font-mono max-w-7xl mx-auto gap-4">
          <p>© 2026 D Documentales. Todos los derechos reservados.</p>
          <p>Cine • Documental • Digital High-End</p>
        </div>
      </footer>

    </div>
  );
}