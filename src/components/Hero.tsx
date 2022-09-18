import { ImageData } from "../../shared/sharedTypes";

interface HeroProps {
    tagline: string;
    downloadButtonText: string;
    heroImage: ImageData[];
}

const Hero = ({ tagline, downloadButtonText, heroImage }: HeroProps) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {tagline}
            {downloadButtonText}
            {JSON.stringify(heroImage)}
        </div>
    );
}

export default Hero;