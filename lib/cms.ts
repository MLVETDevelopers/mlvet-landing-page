import { DownloadPageContent, HelpDocArticle, HelpDocArticlesCategory, HelpDocArticlesData, LandingPageContent } from "../shared/sharedTypes";

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

  export const helpDocs = async (): Promise<HelpDocArticlesData> => {
    const res = await fetch(`${base}/help-doc-articles?populate=*`);
    const data = await res.json();
    return data as HelpDocArticlesData;
  }

  export const helpDoc = async (id: string): Promise<HelpDocArticle> => {
    const res = await fetch(`${base}/help-doc-articles/${id}?populate=*`);
    const data = await res.json();
    return data.data as HelpDocArticle;
  }

  export const helpDocCategories = async (): Promise<HelpDocArticlesCategory[]> => {
    const res = await fetch(`${base}/help-doc-categories?populate=*`);
    const data = await res.json();
    return data.data as HelpDocArticlesCategory[];
  }
}

export default CMS;