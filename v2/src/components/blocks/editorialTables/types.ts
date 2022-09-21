// **** CELLS ****
type EditorialTableHeaderCell = {
  content: string;
  id: string;
  type: 'colHeader';
};

type EditorialTableDetailedHeaderCell = {
  content: {
    affiliate?: { text: string; url: string; };
    image?: {
      altText?: string;
      cloudinaryUrl: string;
    },
    stickerText?: string;
    title: string;
  }
  id: string;
  type: 'colHeaderDetailed';
};

export type EditorialTableRowHeaderCell = {
  content: string;
  id: string;
  type: 'rowHeader';
};

type EditorialTableTextCell = {
  content: string;
  id: string;
  type: 'text';
};

type EditorialTableIconCell = {
  content: 'yes' | 'no';
  id: string;
  type: 'icon';
};

type EditorialTableEmptyCell = {
  content: '';
  id: string;
  type: 'empty';
};

export type EditorialTableCell = EditorialTableEmptyCell
  | EditorialTableHeaderCell
  | EditorialTableDetailedHeaderCell
  | EditorialTableRowHeaderCell
  | EditorialTableIconCell
  | EditorialTableTextCell;

// **** ROWS ****
type ComparisonTableRow = {
  cells: [
    EditorialTableRowHeaderCell, ...Array<EditorialTableCell>,
  ],
  id: string;
};

type InformationalTableRow = {
  cells: EditorialTableCell[];
  id: string;
};

// **** TABLES ****
type ComparisonTable = {
  rows: ComparisonTableRow[],
  type: 'comparison';
};

type InformationalTable = {
  rows: InformationalTableRow[];
  type: 'informational';
};

export type EditorialTableType = InformationalTable | ComparisonTable;
