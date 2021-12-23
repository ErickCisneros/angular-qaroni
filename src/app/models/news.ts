export interface News {
  merchantId: number;
  status: string;
  name?: null;
  featured: boolean;
  date: string;
  title: string;
  subtitle: string;
  slug: string;
  shortDescription: string;
  largeDescription: string;
  creationDate: string;
  lastUpdateDate: string;
  newId: number;
  imagesURL?: string[] | null;
  imageUrl: string;
  authors?: null[] | null;
  tags?: null[] | null;
  categories?: null[] | null;
  descriptions?: Descriptions[] | null;
}

interface Descriptions {
  language: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  largeDescription: string;
}
