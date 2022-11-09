type Image = {
  altText?: string;
  cloudinaryUrl: string;
}

type Author = {
  id: number;
  firstName: string;
  lastName: string;
  image?: Image;
  inactive?: boolean;
};

export type CardLinks = {
  url: string;
  title: string;
}

type Video = {
  image: Image;
  zypeId: string;
}

interface VideoCardBody {
  id: number;
  video: Video;
  title: string;
  body: string;
}
interface CardBody {
  id: number;
  image: Image;
  title: string;
  body: string;
}

interface CardFooter {
  author?: Author[];
  links: CardLinks[];
  isFavorited: boolean;
}

// As the individual cards begin to differ from the `standard card`, more unique cards will be added.
interface StandardCard extends CardFooter, CardBody {cardType: 'standard'};
interface VideoCard extends CardFooter, VideoCardBody {cardType: 'video'};