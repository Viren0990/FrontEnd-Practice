import Image from "next/image";
import nnb from "@/nnb.png"
import { Button } from "./ui/button";

export const LowestMid = () => {
    return(
        <div className="px-4 pt-20 sm:px-6 lg:px-20 sm:pt-8 lg:pt-16 max-2-7xl mx-auto pb-14 bg-blue-50/80">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                <div className="flex-col justify-center items-center mx-auto">
                    <h1 className="text-4xl sm:text-4xl lg:text-3xl xl:text-3xl font-bold text-gray-900 leading-tight text-center md:text-left">Download our mobile apps</h1>
                    <div className="border-b-2 border-black pt-2"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 pt-4 text-center md:text-left">
                        Our dedicated patient engagement app and web portal allow you to access information instantaneously "no tedeous form, long calls, or administrative hassle" and securely.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                    <Button className="w-40 border-1 border-blue-600 bg-white text-blue-600 mt-8 hover:bg-blue-600 hover:text-white">Download</Button>
                    </div>
                </div>
                <div>
                    <Image 
                        src={nnb}
                        alt="Virtual healthcare illustration"
                        width={800}
                        height={600}
                        priority
                        className="h-70 md:h-auto w-full"
                    />
                </div>
            </div>
        </div>
    )
}