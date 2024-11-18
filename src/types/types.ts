export type ICharacterDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: ICharacterDataContainer;
  etag: string;
};

export type ICharacterDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharacter[];
};

export type ICharacter = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: IUrl[];
  thumbnail: IImage;
  comics: IComicList;
  stories: IStoryList;
  events: IEventList;
  series: ISeriesList;
};

export type IUrl = {
  type?: string;
  url?: string;
};

export type IImage = {
  path: string;
  extension?: string;
};

export type IComicList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: IComicSummary[];
};

export type IComicSummary = {
  resourceURI?: string;
  name?: string;
};

export type IStoryList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: IStorySummary[];
};

export type IStorySummary = {
  resourceURI?: string;
  name?: string;
  type?: string;
};

export type IEventList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: IEventSummary[];
};

export type IEventSummary = {
  resourceURI?: string;
  name?: string;
};

export type ISeriesList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ISeriesSummary[];
};

export type ISeriesSummary = {
  resourceURI?: string;
  name?: string;
};

export type IComics = {
  id: number;
  name: string;
  description: string;
  img: string;
  characters: ILinkInfo[];
};

export type ILinkInfo = {
  id: number;
  name: string;
};

export type IItem = {
  id: number;
  name: string;
  img: string;
  description: string;
  type: string;
};

export type ICharacterSearchParams = {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: string;
  comics?: string;
  series?: string;
  events?: string;
  stories?: string;
  orderBy?: string;
  offset?: number;
  limit?: number;
};

export type IComicDataWrapper = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: IComicDataContainer;
  etag: string;
};

export type IComicDataContainer = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: IComic[];
};

export type IComic = {
  id: number;
  digitalId?: number;
  title: string;
  issueNumber?: number;
  variantDescription?: string;
  description: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: ITextObject[];
  resourceURI?: string;
  urls?: IUrl[];
  series?: ISeriesSummary;
  variants?: IComicSummary[];
  collections?: IComicSummary[];
  collectedIssues?: IComicSummary[];
  dates?: IComicDate[];
  prices?: IComicPrice[];
  thumbnail: IImage;
  images?: IImage[];
  creators?: ICreatorList;
  characters?: ICharacterList;
  stories?: IStoryList;
  events?: IEventList;
};

export type ITextObject = {
  type?: string;
  language?: string;
  text?: string;
};

export type IComicDate = {
  type?: string;
  date?: Date;
};

export type IComicPrice = {
  type?: string;
  price?: number;
};

export type ICreatorList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ICreatorSummary[];
};

export type ICreatorSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type ICharacterList = {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items?: ICharacterSummary[];
};

export type ICharacterSummary = {
  resourceURI?: string;
  name?: string;
  role?: string;
};

export type IComicSearchParams = {
  format?: string;
  formatType?: string;
  noVariants?: boolean;
  dateDescriptor?: string;
  dateRange?: string;
  title?: string;
  titleStartsWith?: string;
  startYear?: string;
  issueNumber?: string;
  diamondCode?: string;
  digitalId?: string;
  upc?: string;
  isbn?: string;
  ean?: string;
  issn?: string;
  hasDigitalIssue?: boolean;
  modifiedSince?: string;
  creators?: string;
  characters?: string;
  series?: string;
  events?: string;
  stories?: string;
  sharedAppearances?: string;
  collaborators?: string;
  orderBy?: string;
  offset?: number;
  limit?: number;
};
