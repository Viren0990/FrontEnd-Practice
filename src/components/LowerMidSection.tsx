import yy from "@/yy.png"
import Image from "next/image";
import { Button } from "./ui/button";

export const LowerMidSection = () => {
    return(
        <div className="px-4 pt-20 sm:px-6 lg:px-20 mx-auto sm:pt-8 lg:pt-16 max-w-7xl pb-14">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
                <div>
                    <Image 
                        src={yy}
                        alt="Virtual healthcare illustration"
                        width={800}
                        height={600}
                        priority
                        className="h-70 md:h-auto w-full"
                    />
                </div>
                <div className="flex-col justify-center items-center mx-auto">
                    <h1 className="text-4xl sm:text-4xl lg:text-3xl xl:text-3xl font-bold text-gray-900 leading-tight text-center md:text-left">Leading healthcare providers</h1>
                    <div className="border-b-2 border-black pt-2"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0 pt-4 text-center md:text-left">
                        Travflagar provides progressive and affordable healthcare, accessible and mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deiliever.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                    <Button className="w-40 border-1 border-blue-600 bg-white text-blue-600 mt-8 hover:bg-blue-600 hover:text-white">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}