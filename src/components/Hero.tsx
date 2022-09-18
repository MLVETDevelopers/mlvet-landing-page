import { ImageData } from "../../shared/sharedTypes";
import PrimaryButton from "../components/PrimaryButton";

interface HeroProps {
    tagline: string;
    downloadButtonText: string;
    heroImage: ImageData[];
}

const Hero = ({ tagline, downloadButtonText, heroImage }: HeroProps) => {
    return (
        <div className="flex flex-row flex-wrap basis-1/2 w-full bg-grey-600 text-yellow-500 p-5">
            <div className="flex-col flex-1 align-middle justify-between">
                <div className="w-full text-6xl">{tagline} </div>
                <PrimaryButton text={downloadButtonText}/>
            </div>
            <div className="flex-1 bg-grey-900">
                <img src={[...heroImage].pop()?.attributes.url ?? ""}/>
            </div>
            
        </div>
    );
}

export default Hero;