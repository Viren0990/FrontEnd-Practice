"use client"

import { motion } from 'framer-motion';
import dd from "@/dd.png"
import Image from "next/image";

export const Heroo = () => {
    return (
        <main className="px-4 pt-20 sm:px-6 lg:px-20 mx-auto  sm:pt-8 lg:pt-10 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                <motion.div 
                initial={{x:-10, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration: 0.8, ease: "easeOut", delay: 0.5}}
                className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                        Virtual Healthcare <br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>for you
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                        Travflagar provides progressive and affordable healthcare, accessible and available for everyone.
                    </p>
                    <div className="pt-2 sm:pt-4">
                        <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium shadow-lg hover:shadow-xl">
                            Consult Today
                        </button>
                    </div>
                </motion.div>
                
                <motion.div 
                initial={{x:10, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{duration: 0.8, ease: "easeOut", delay: 0.5}} className="flex justify-center items-center mt-8 lg:mt-0 lg:pl-8">
                    <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                        <Image
                            src={dd}
                            alt="Virtual healthcare illustration"
                            width={800}
                            height={600}
                            priority
                            className="h-80 md:h-auto w-full"
                        />
                    </div>
                </motion.div>
            </div>
        </main>
    )
}