export type OnClick = (id: number, name: string) => void;

export type Author = {
  id: number;
  firstName: string;
  lastName: string;
  image?: { altText?: string, cloudinaryUrl: string };
  inactive?: boolean;
};

export type Header = {
  name: string;
  time?: string;
  yields?: string;
  headnote?: string;
}
export type IngredientItems = {
	name: string,
	post?: string,
	quantity?: string,
	measurement?: string,
}

export type Group = {
	name: string,
	items: IngredientItems[];
}
