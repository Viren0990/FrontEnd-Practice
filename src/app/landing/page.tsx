import { Heroo } from "@/components/Heroo";
import { LowerMidSection } from "@/components/LowerMidSection";
import { MidSection } from "@/components/MidSection";
import { Nav } from "@/components/Nav";
import { LowestMid } from "@/components/LowestMid";
import { Footer } from "@/components/Footerr";

export default function Landing() {
    return (
        <div className="min-h-screen bg-white">
            <Nav />
            <Heroo />
            <MidSection />
            <LowerMidSection />
            <LowestMid />
            <Footer />
        </div>
    );
}