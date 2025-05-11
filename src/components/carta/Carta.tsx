import { motion } from 'framer-motion';
import { FaHeart, FaMusic } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Galeria from './Galeria';
import BotonFlor from './BotonFlor';
import Footer from './Footer';
import EfectosVisuales from '../efectos/EfectosVisuales';
import mamiMusic from '../../assets/audio/mamiMusic.mp3';

const Carta = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mostrarLluvia, setMostrarLluvia] = useState(false);
  const audioRef = useRef(new Audio(mamiMusic));
  const isMobile = window.innerWidth <= 768; // Assuming a breakpoint of 768px

  useEffect(() => {
    // Mostrar la lluvia de corazones cuando se carga la carta
    setMostrarLluvia(true);
    const timer = setTimeout(() => setMostrarLluvia(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-softPink to-lightRose">
        <div className="absolute inset-0 opacity-30">
          {[...Array(isMobile ? 10 : 20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 via-highlight/20 to-deepPink/20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: Math.random() * (isMobile ? 10 : 20) + (isMobile ? 10 : 20),
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Efectos visuales */}
      <EfectosVisuales mostrarLluvia={mostrarLluvia} />

      <div className="relative z-10 py-6 md:py-12 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 relative overflow-hidden"
        >
          {/* Botón secreto de música */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMusic}
            className="absolute top-2 md:top-4 left-2 md:left-4 text-highlight opacity-50 hover:opacity-100 transition-opacity touch-manipulation"
          >
            <FaMusic size={isMobile ? 20 : 24} className={isPlaying ? 'animate-spin-slow' : ''} />
          </motion.button>

          {/* Decoración superior */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-highlight to-deepPink"></div>
          
          {/* Título */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl font-cursive text-center text-highlight mb-4 md:mb-8 relative"
          >
            <span className="relative inline-block">
              Para mi Mamá, Emna
              <motion.div
                className="absolute -inset-1 bg-gradient-shine bg-[length:200%_100%] animate-shine"
                style={{ opacity: 0.3 }}
              />
            </span>
          </motion.h1>

          {/* Corazones flotantes */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-4 text-highlight"
          >
            <FaHeart size={24} className="animate-pulse-slow" />
          </motion.div>

          {/* Contenido de la carta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="space-y-6 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              Querida mamá Emna,
            </p>
            
            <p className="text-lg leading-relaxed">
              En este día tan especial, queremos expresarte todo nuestro <span className="text-highlight font-semibold">amor</span> y <span className="text-deepPink font-semibold">gratitud</span> por ser la mejor madre del mundo. Tu amor incondicional, tu paciencia y tu dedicación han sido nuestra guía en la vida.
            </p>

            <p className="text-lg leading-relaxed">
              Gracias por estar siempre ahí, por tus <span className="text-primary font-semibold">abrazos</span> cuando más los necesitamos, por tus consejos sabios y por tu sonrisa que ilumina nuestros días. Cada momento compartido contigo es un tesoro que atesoramos en nuestros corazones.
            </p>

            <p className="text-lg leading-relaxed">
              Eres nuestro ejemplo a seguir, nuestra inspiración y nuestro mayor apoyo. Tu amor nos ha hecho mejores personas y por eso te estamos eternamente agradecidos.
            </p>

            <p className="text-lg leading-relaxed">
              Te queremos más de lo que las palabras pueden expresar.
            </p>

            <p className="text-lg leading-relaxed text-right font-cursive text-highlight">
              Con todo nuestro amor,<br />
              Geancarlos y Joseph
            </p>
          </motion.div>

          {/* Galería de fotos */}
          <Galeria />

          {/* Decoración inferior */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center mt-8 space-x-4"
          >
            <FaHeart className="text-primary animate-float" />
            <FaHeart className="text-highlight animate-float" style={{ animationDelay: '0.5s' }} />
            <FaHeart className="text-deepPink animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>
        </motion.div>

        {/* Botón de flor */}
        <BotonFlor />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Carta; 