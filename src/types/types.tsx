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
