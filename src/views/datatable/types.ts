export type User = {
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
  portfolio_url: string | undefined; // assuming this can be a string or null if the user does not have a portfolio
};


export type Topic = {
  id: string;
  title: string;
  description: string;
  total_photos: number;
  cover_photo: any;
  preview_photos: any[];
  links: any;
  published_at: string;
}


export type Collection = {
  id: string;
  title: string;
  user: any; // 根据实际情况，可以使用适当的类型替换 any
  total_photos: number;
  cover_photo: any; // 根据实际情况，可以使用适当的类型替换 any
  preview_photos: any[]; // 根据实际情况，可以使用适当的类型替换 any
  links: any; // 根据实际情况，可以使用适当的类型替换 any
  tags: any[]; // 根据实际情况，可以使用适当的类型替换 any
  published_at: string;
}


export type Photo = {
  id: string;
  // avatar: string; // 如果需要使用 photo.user.profile_image.small 的话，可以将其定义为字符串类型
  user: any; // 根据实际情况，可以使用适当的类型替换 any
  color: string;
  size: string;
  alt_description: string;
  thumb: any; // 根据实际情况，可以使用适当的类型替换 any
  download: string;
  likes: number;
  tags: any[]; // 根据实际情况，可以使用适当的类型替换 any
  created_at: string;
  created_at2: string;
}


