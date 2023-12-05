type User = {
  id: string; // assuming id is of type string
  avatar: string; // assuming avatar is a URL which is of type string
  username: string;
  name: string;
  location: string; // assuming location is of type string
  for_hire: boolean;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  portfolio_url: string | null; // assuming this can be a string or null if the user does not have a portfolio
};
