  export const moving_right = {
    hidden: {
      Opacity: 0,
      x: -40,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };