import React, { FC, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollTriggeredVerticalProps {
  children: ReactNode;
  time: number;
  delay: number;
}

const ScrollTriggeredVertical: FC<ScrollTriggeredVerticalProps> = ({
  children,
  time,
  delay,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  // Конфигурация анимации
  const animationVariants = {
    hidden: {
      y: 50, // Начальное положение сдвига
      opacity: 0,
    },
    visible: {
      y: 0, // Конечное положение
      opacity: 1,
      transition: {
        duration: time, // Продолжительность анимации
        delay: delay,
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

export default ScrollTriggeredVertical;
