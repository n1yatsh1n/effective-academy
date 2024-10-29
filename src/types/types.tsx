export type ICharacter = {
  id: number;
  img: string;
  description: string;
  name: string;
  powers: string[];
  comics: ILinkInfo[];
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
}

export type IItem = {
  id: number;
  name: string;
  img: string;
  description: string;
  type: string;
}
