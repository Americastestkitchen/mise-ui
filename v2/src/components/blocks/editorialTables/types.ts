type EditorialTableHeaderCell = {
  content: string;
  id: string;
  type: 'header';
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
| EditorialTableIconCell
| EditorialTableTextCell;

export type EditorialTableRow = {
  cells: EditorialTableCell[];
  id: string;
};

export type EditorialTable = EditorialTableRow[];
