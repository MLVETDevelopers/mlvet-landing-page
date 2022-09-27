export interface cmsMetaData {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
}

export interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    ext: string;
    mime: string;
    size: number;
    url: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface ContentBlockData {
  id: number;
  title: string;
  body: string;
  type: 'center' | 'left' | 'right';
  media: {data: ImageData};
}

export interface LandingPageContent {
  id: string;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    tagline: string;
    downloadButtonText: string;
    footerText: string;
    footerSubText: string;
    heroImage: {
      data: ImageData[];
    };
    contentBlock: ContentBlockData[];
  }
}

export interface OsDownloadData {
  id: number;
  os: 'macOS' | 'linux' | 'windows';
  x86Url: string;
  armUrl: string;
  osLogo: {
    data: ImageData;
  };
}

export interface DownloadPageContent {
  id: string;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    title: string;
    osDownloadUrl: OsDownloadData[];
  }
}

export interface HelpDocCategory {
  id: number;
  attributes: {
    name: string,
    createdAt: Date, 
    updatedAt: Date, 
    publishedAt: Date, 
  }
}

export interface HelpDocCategoriesData {
  data: HelpDocCategory[];
  meta: cmsMetaData;
}

export interface HelpDocArticle {
  id: number;
  attributes: {
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
    publishedAt: Date,
  }
}

export interface HelpDocArticleTitle {
  id: number;
  attributes: {
    title: string,
  }
}

export interface HelpDocArticlesData {
  data: HelpDocArticleTitle[];
  meta: cmsMetaData;
}
