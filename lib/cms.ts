import { DownloadPageContent, LandingPageContent } from "../shared/sharedTypes";

namespace CMS {
  const base = 'https://mlvet-cms.herokuapp.com/api';

  export const landingPage = async (): Promise<LandingPageContent> => {
    const res = await fetch(`${base}/landing-page?populate=*`);
    const data = await res.json();
    return data.data as LandingPageContent;
  }

  export const downloadPage = async (): Promise<DownloadPageContent> => {
    const res = await fetch(`${base}/download-page?populate[0]=osDownloadUrl&populate[1]=osDownloadUrl.osLogo`);
    const data = await res.json();
    return data.data as DownloadPageContent;
  }
}

export default CMS;