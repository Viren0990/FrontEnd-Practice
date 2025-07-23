import { SigninAuth } from "@/components/SigninAuth";
import Image from "next/image";
import zz from "@/zz.png";

export default function Signin() {
  return (
    // Main Container:
    // flex-col for mobile, md:flex-row for desktop (default behavior is row if flex is present)
    // min-h-screen to ensure it takes full viewport height
    // overflow-hidden to prevent the whole page from scrolling if internal content exceeds its height
    <div className="flex flex-col md:flex-row min-h-screen bg-white overflow-hidden"> {/* Added overflow-hidden */}

      {/* Left Column: Login Form */}
      {/*
        - flex-1: Takes equal space, but constrained by parent height
        - flex justify-center items-center: Centers SigninAuth
        - bg-white: Explicit background
        - px-8 py-8: Generous padding
        - max-h-screen: Constrains its height to the viewport height.
          If content inside is taller, this column will become scrollable internally.
        - overflow-y-auto: Allows internal vertical scrolling if content overflows max-h-screen
      */}
      <div className="flex-1 flex justify-center items-center bg-white px-8 py-8 md:py-0 max-h-screen overflow-y-auto"> {/* Added max-h-screen and overflow-y-auto */}
        <SigninAuth />
      </div>

      {/* Right Column: Illustration */}
      {/*
        - flex-1: Takes equal space
        - hidden md:flex: Hide on mobile, show on desktop
        - items-center justify-center: Centers the image
        - bg-gray-100: Background for the image section
        - max-h-screen: Constrains its height to the viewport height.
        - overflow-hidden: Essential to clip the image if object-cover makes it larger than this container.
      */}
      <div className="flex-1 hidden md:flex items-center justify-center bg-gray-100 max-h-screen overflow-hidden"> {/* Added max-h-screen */}
        <Image
  src={zz}
  alt="Basketball Player Illustration"
  width={600}
  height={600}
  priority
  className="w-full h-full" 
/>
      </div>
    </div>
  );
}