type OnClick = (id: number, name: string) => void;

type Author = {
  id: number;
  firstName: string;
  lastName: string;
  image?: { altText?: string, cloudinaryUrl: string };
  inactive?: boolean;
};

type Header = {
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

type Group = {
  name: string,
	items: IngredientItems[];
}

type SubSteps = {
  content: string
}
type InstructionList = {
  content: string;
  subSteps?: SubSteps[]; 
}

export type RecipeHeaderPropTypes = {
  authors: Author[];
  header: Header;
  onClick?: OnClick;
}

export type IngredientListPropTypes = {
  group: Group[]
};

export type InstructionsPropTypes = {
  header: string;
  list: InstructionList[];
}