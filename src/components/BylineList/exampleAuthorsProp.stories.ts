import type { BylineListProps } from './BylineList';

const authors: BylineListProps['authors'] = [
  {
    firstName: 'Sawyer',
    lastName: 'Phillips',
    bio: 'Savoie is an Assistant Digital Editor of ATK Reviews. She enjoys baking cakes, collecting records, and all things Toni Morrison.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_sawyer_phillips' },
  },
  {
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
  },
  {
    firstName: 'Miye',
    lastName: 'Bromberg',
    bio: 'Miye is a Senior Editor for ATK Reviews. She covers booze, blades, and gadgets of questionable value.',
    photo: { publicId: 'v1/AKO%20Articles/Author_Headshots/staff_miye_bromberg' },
  },
];

const exampleAuthorsProp = {
  oneAuthor: { authors: [authors[0]] },
  oneAuthorNoPhoto: { authors: [authors.map(author => ({ ...author, photo: undefined }))[0]] },
  twoAuthors: { authors: [authors[0], authors[1]] },
  threeAuthors: { authors },
};

export default exampleAuthorsProp;
