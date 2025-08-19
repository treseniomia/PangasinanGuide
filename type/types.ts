export interface BookmarkType {
  id: number;
  image: string;
  title: string;
  location: string;
  description: string;
}

export interface NotificationsType {
  id: number;
  title: string;
  message: string;
  price: string;
  timestamp: string;
}

export interface CategoriesType {
  id: number;
  title: string;
  image: string;
}

export interface ExploreType {
  id: number;
  image: string;
  title: string;
  location: string;
  ratings: number;
  price: string;
  category: string;
  description: string;
}

export interface BookingsType {
  id: string;
  image: string;
  title: string;
  price: string;
  date: string;
  reserved: string;
  status: string;
}
