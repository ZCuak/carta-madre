import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaHeart } from 'react-icons/fa';

// Importar imágenes (deberás agregar tus propias imágenes)
const imagenes = [
  {
    id: 1,
    src: '/src/assets/images/foto1.jpeg',
    alt: 'Mamá y yo 1',
    description: 'Siempre feliz'
  },
  {
    id: 2,
    src: '/src/assets/images/foto2.jpeg',
    alt: 'Mamá y yo 2',
    description: 'Mamá ghibli'
  },
  {
    id: 3,
    src: '/src/assets/images/foto3.jpeg',
    alt: 'Mamá y yo 3',
    description: 'Juntos siempre'
  },
  {
    id: 4,
    src: '/src/assets/images/foto5.jpeg',
    alt: 'Mamá y yo 4',
    description: 'Juntos siempre'
  },

  // Agrega más imágenes según necesites
];

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Precargar imágenes
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = imagenes.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = img.src;
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % imagenes.length);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + imagenes.length) % imagenes.length);
  };

  // Manejar gestos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const startX = touch.clientX;
    
    const handleTouchEnd = (e: React.TouchEvent) => {
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
    };

    document.addEventListener('touchend', handleTouchEnd as any, { once: true });
  };

  return (
    <div className="py-8 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-cursive text-center text-primary mb-8"
      >
        Nuestros Momentos Especiales
      </motion.h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-primary text-4xl"
          >
            <FaHeart />
          </motion.div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {imagenes.map((imagen, index) => (
            <motion.div
              key={imagen.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-white text-center p-4"
                >
                  <FaHeart className="mx-auto mb-2" />
                  <p className="text-sm font-cursive">{imagen.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 right-4 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <FaTimes size={24} />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute left-4 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaChevronLeft size={24} />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              className="absolute right-4 text-white text-2xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaChevronRight size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative"
              onTouchStart={handleTouchStart}
            >
              <img
                src={imagenes[selectedImage].src}
                alt={imagenes[selectedImage].alt}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-center mt-4 font-cursive text-lg"
              >
                {imagenes[selectedImage].description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria; 