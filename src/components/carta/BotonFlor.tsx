import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaRegHeart, FaPlay } from 'react-icons/fa';
import videoFeliz from '../../assets/video/feliz.mp4';

const BotonFlor = () => {
  const [mostrarFlor, setMostrarFlor] = useState(false);
  const [mostrarVideo, setMostrarVideo] = useState(false);

  const handleClick = () => {
    setMostrarFlor(true);
    // La flor desaparecerá automáticamente después de 3 segundos
    setTimeout(() => {
      setMostrarFlor(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMostrarVideo(true)}
        className="bg-highlight text-white rounded-full p-4 shadow-lg"
      >
        <FaPlay size={24} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="bg-primary text-white rounded-full p-4 shadow-lg"
      >
        <FaRegHeart size={24} />
      </motion.button>

      <AnimatePresence>
        {mostrarFlor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ 
                scale: [0, 1.2, 1],
                rotate: [-180, 10, -10, 0],
                y: [0, -20, 0]
              }}
              exit={{ 
                scale: 0,
                rotate: 180,
                opacity: 0
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="text-8xl"
            >
              🌸
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-1/4 bg-white px-6 py-3 rounded-full shadow-lg text-primary font-cursive text-xl whitespace-nowrap"
            >
              ¡Te quiero mamá!
            </motion.div>
          </motion.div>
        )}

        {mostrarVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setMostrarVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoFeliz}
                autoPlay
                controls
                className="max-w-full max-h-full"
                onEnded={() => setMostrarVideo(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BotonFlor; 