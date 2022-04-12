import type { BylineListProps } from './BylineList';

const authors: BylineListProps['authors'] = [
  {
    id: 1,
    firstName: 'Sawyer',
    lastName: 'Phillips',
    bio: 'Savoie is an Assistant Digital Editor of ATK Reviews. She enjoys baking cakes, collecting records, and all things Toni Morrison.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_sawyer_phillips' },
  },
  {
    id: 2,
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
    inactive: true,
  },
  {
    id: 3,
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
    inactive: false,
  },
];

const exampleAuthorsProp = {
  noAuthor: { attribution: 'Updated on Jun. 2020', authors: [] },
  oneAuthor: { attribution: 'Updated on Jun. 2020', authors: [authors[0]] },
  oneAuthorNoPhoto: { attribution: 'Updated on Jun. 2020', authors: [authors.map(author => ({ ...author, photo: undefined }))[0]] },
  twoAuthors: { attribution: 'Updated on Jun. 2020', authors: [authors[0], authors[1]] },
  threeAuthors: { attribution: 'Updated on Jun. 2020', authors },
};

export default exampleAuthorsProp;
