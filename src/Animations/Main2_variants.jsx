    export const parent = {
        hidden: {},
        show:{
            transition: {
                staggerChildren: 0.3
            }
        }
    }
    export const child = {
        hidden: {
            opacity: 0,
            y: 40
        },
        show: {
            opacity: 1,
            y: 0,
            type: "tween",
            ease: "easeInOut"
        }
    }
