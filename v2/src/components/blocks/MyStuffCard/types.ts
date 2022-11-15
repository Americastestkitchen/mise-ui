type Image = {
  altText?: string;
  cloudinaryUrl: string;
}
type RatingVal = {
  avgRating: number;
  numRating: number;
}

export type Favorite = {
  image?: Image;
  url: string;
  title: string;
  commentsCount?: number;
  rating?: RatingVal
}

export type FavoritesList = {
  favorites: Favorite[];
}