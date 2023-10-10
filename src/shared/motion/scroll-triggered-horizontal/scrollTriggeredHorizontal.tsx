import React, { FC, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollTriggeredHorisontalProps {
  time: number;
  children: ReactNode;
}

const ScrollTriggeredHorisontal: FC<ScrollTriggeredHorisontalProps> = ({
  children,
  time,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Конфигурация анимации
  const animationVariants = {
    hidden: {
      x: 50, // Начальное положение сдвига
      opacity: 0,
    },
    visible: {
      x: 0, // Конечное положение
      opacity: 1,
      transition: {
        duration: time, // Продолжительность анимации
      },
    },
  };

  // Обработчик изменения видимости
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollTriggeredHorisontal;
