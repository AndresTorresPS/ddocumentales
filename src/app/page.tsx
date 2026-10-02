'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Play, Film, Sparkles, ChevronDown } from 'lucide-react';

// Carga dinámica del lienzo 3D desactivando SSR para prevenir errores de hidratación con WebGL
const HeroCanvas = dynamic(() => import('@/components/canvas/HeroCanvas'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-neutral-950 animate-pulse" />,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-white overflow-hidden selection:bg-red-600 selection:text-white">
      {/* Fondo 3D Interactivo */}
      <HeroCanvas/>

      {/* Superposición de degradados para legibilidad cinematográfica */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80 z-10 pointer-events-none" />

      {/* Interfaz de Usuario Overlay */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen px-8 py-12 max-w-7xl mx-auto">
        {/* Navegación */}
        <header className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2"
          >
            <Film className="w-8 h-8 text-red-600"/>
            <span className="text-2xl font-black tracking-widest uppercase">D Documentales</span>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="hidden md:flex gap-8 text-sm font-medium tracking-wider text-neutral-400 uppercase"
          >
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </motion.nav>
        </header>

        {/* Hero Content */}
        <div className="my-auto max-w-3xl space-y-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 backdrop-blur-md text-xs font-mono text-red-500 tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5"/>
            <span>Productora Audiovisual & Cine Documental</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none"
          >
            Historias que <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">transforman</span> la realidad.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed"
          >
            Desde largometrajes y documentales cinematográficos hasta narrativas digitales de alto impacto para redes sociales.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 font-semibold rounded-full text-white transition-all transform hover:scale-105 shadow-lg shadow-red-600/30">
              <Play className="w-5 h-5 fill-current"/>
              <span>Ver Showreel 2026</span>
            </button>
            <button className="px-8 py-4 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 backdrop-blur-md font-semibold rounded-full text-white transition-all">
              Explorar Proyectos
            </button>
          </motion.div>
        </div>

        {/* Indicator Scroll */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex justify-between items-end border-t border-neutral-900 pt-6 text-xs text-neutral-500 font-mono"
        >
          <span>SELECCIÓN OFICIAL / FESTIVALES & DIGITAL</span>
          <div className="flex items-center gap-2 animate-bounce">
            <span>SCROLL</span>
            <ChevronDown className="w-4 h-4"/>
          </div>
        </motion.div>
      </div>
    </main>
  );
}