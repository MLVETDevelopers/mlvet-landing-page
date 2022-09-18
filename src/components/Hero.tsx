import { LandingPageContent } from "../../shared/sharedTypes";

interface HeroProps {
    content: LandingPageContent
}

const Hero = ({ content }: HeroProps) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {content.attributes.tagline}
        </div>
    );
}

export default Hero;