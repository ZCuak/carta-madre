import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

interface EfectosVisualesProps {
  mostrarLluvia: boolean;
}

const EfectosVisuales = ({ mostrarLluvia }: EfectosVisualesProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [corazones, setCorazones] = useState<Array<{ id: number; x: number; delay: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Efecto de brillo que sigue al cursor/touch
  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      setMousePosition({ x, y });
    };

    // Solo agregar el efecto de brillo en dispositivos no móviles
    if (!isMobile) {
      window.addEventListener('mousemove', handleMove);
      return () => window.removeEventListener('mousemove', handleMove);
    }
  }, [isMobile]);

  // Generar corazones para la lluvia
  useEffect(() => {
    if (mostrarLluvia) {
      const cantidadCorazones = isMobile ? 10 : 20; // Menos corazones en móvil
      const nuevosCorazones = Array.from({ length: cantidadCorazones }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        delay: Math.random() * 2
      }));
      setCorazones(nuevosCorazones);
    }
  }, [mostrarLluvia, isMobile]);

  return (
    <>
      {/* Efecto de brillo que sigue al cursor (solo en desktop) */}
      {!isMobile && (
        <motion.div
          className="fixed pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-primary via-highlight to-deepPink rounded-full opacity-20 blur-xl" />
        </motion.div>
      )}

      {/* Lluvia de corazones */}
      <AnimatePresence>
        {mostrarLluvia && corazones.map((corazon) => (
          <motion.div
            key={corazon.id}
            initial={{ y: -100, x: corazon.x, opacity: 0 }}
            animate={{ 
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: isMobile ? 2 : 3, // Más rápido en móvil
              delay: corazon.delay,
              ease: "linear",
            }}
            className="absolute text-highlight"
            style={{
              fontSize: isMobile ? '1rem' : '1.5rem' // Corazones más pequeños en móvil
            }}
          >
            <FaHeart size={isMobile ? 16 : 24} />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  );
};

export default EfectosVisuales; 