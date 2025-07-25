"use client"

import { motion } from 'framer-motion';
import Image from "next/image";
import gg from "@/gg.png"
import oo from "@/oo.png"
import bb from "@/bb.png"
import nn from "@/nn.png"
import mm from "@/mm.png"
import zz from "@/zz.png"
import ggg from "@/ggg.png"
import { Button } from "./ui/button";

export const MidSection = () => {
    const services = [
        {
            icon: gg,
            title: "Search doctor",
            description: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            icon: oo,
            title: "Online pharmacy",
            description: "Buy your medicines with our mobile application with a simple delivery system"
        },
        {
            icon: bb,
            title: "Consultation",
            description: "Free consultation with our trusted doctors and get the best recommendations"
        },
        {
            icon: nn,
            title: "Details info",
            description: "Free consultation with our trusted doctors and get the best recommendations"
        },
        {
            icon: mm,
            title: "Emergency care",
            description: "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            icon: zz,
            title: "Tracking",
            description: "Track and save your medical history and health data"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 10,
                stiffness: 100
            }
        }
    };

    return(
        <div className="relative mt-16 py-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={ggg}
                    alt="Background pattern"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-blue-50/80"></div>
            </div>
            
           
            <div className="relative z-10 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
                
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2
                    }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <div className="inline-block">
                        <motion.h2 
                            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                                delay: 0.4,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                            }}
                        >
                            Our services
                        </motion.h2>
                        <motion.div 
                            className="w-16 h-0.5 bg-gray-900 mx-auto mb-6"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        ></motion.div>
                    </div>
                    <motion.p 
                        className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        We provide to you the best choices for you. Adjust it to your health needs and make sure your undergo treatment 
                        with our highly qualified doctors you can consult with us which type of service is suitable for your health
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            variants={item}
                            whileHover={{ 
                                y: -5,
                                transition: { 
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 10
                                } 
                            }}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="mb-6">
                                <motion.div 
                                    className="w-16 h-16 lg:w-20 lg:h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6"
                                    whileHover={{ 
                                        rotate: 5,
                                        scale: 1.05,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <Image
                                        src={service.icon}
                                        alt={`${service.title} icon`}
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 lg:w-10 lg:h-10"
                                    />
                                </motion.div>
                            </div>
                            
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 capitalize">
                                {service.title}
                            </h3>
                            
                            <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Learn More Button */}
                <motion.div 
                    className="text-center mt-12 lg:mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Learn more
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}