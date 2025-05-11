import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="text-center py-4 text-gray-500 text-sm font-light"
    >
      <p className="font-cursive">
        Creado con ❤️ por Gean
      </p>
    </motion.footer>
  );
};

export default Footer; 