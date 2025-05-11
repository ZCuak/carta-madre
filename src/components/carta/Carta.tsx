import { motion } from 'framer-motion';
import { FaHeart, FaMusic } from 'react-icons/fa';
import { useState, useRef } from 'react';
import Galeria from './Galeria';
import BotonFlor from './BotonFlor';
import Footer from './Footer';
import mamiMusic from '../../assets/audio/mamiMusic.mp3';

const Carta = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(mamiMusic));

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-softPink to-lightRose py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden"
      >
        {/* Botón secreto de música */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMusic}
          className="absolute top-4 left-4 text-highlight opacity-50 hover:opacity-100 transition-opacity"
        >
          <FaMusic size={24} className={isPlaying ? 'animate-spin-slow' : ''} />
        </motion.button>

        {/* Decoración superior */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-highlight to-deepPink"></div>
        
        {/* Título */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-cursive text-center text-highlight mb-8 relative"
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
  );
};

export default Carta; 