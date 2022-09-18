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