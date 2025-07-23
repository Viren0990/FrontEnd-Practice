"use client"

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { easeIn } from "framer-motion";
import * as motion from "motion/react-client"

export default function(){
    return (
        <div className="bg-blue-800 bg-[url('/aa.png')] bg-cover bg-center min-h-screen">
            <motion.div
                initial={{y:-50, opacity:0}}
                animate={{ y: 0, opacity: 1 }}           // Animates to fully opaque
                transition={{ duration: 0.8, ease: easeIn }}
            >
                <Navbar />
            </motion.div>
            <motion.div 
            initial={{y:50, opacity:0}}
            animate={{ y: 0, opacity: 1 }}           // Animates to fully opaque
        transition={{ duration: 0.8, ease: easeIn }}
            className="mt-40 flex justify-center">
                <Hero  />
            </motion.div>
            <div className="flex justify-center mt-20">
            <motion.button
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, type: "tween", ease: "easeOut" } // Much faster and smoother for hover
                }}

        
                whileTap={{
                    scale: 0.8,
                    transition: { duration: 0.1, type: "tween", ease: "easeOut" } // Even faster for a 'tap' feel
                }}
                initial={{y:50, opacity:0}}
                animate={{ y: 0, opacity: 1 }}           // Animates to fully opaque
                transition={{ duration: 0.8, ease: easeIn }}
                className="bg-blue-700 text-white pl-6 pr-6 pt-4 pb-4 rounded-full hover:text-gray-200">
                    Create an Account
            </motion.button>
            </div>
            
        </div>
    )
}         