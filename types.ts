export interface Product {
  id: string;
  name: string;
  latinName: string;
  price: number;
  image: string;
  age?: number;
  category: 'indoor' | 'outdoor' | 'pot' | 'tool';
  isBestSeller?: boolean;
  isSale?: boolean;
  originalPrice?: number;
  rating?: number;
  reviews?: number;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  readTime: string;
  views?: string;
  difficulty?: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  time: string;
  price: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  image: string;
  spotsLeft?: number;
}

export interface UserTree {
  id: string;
  name: string;
  species: string;
  acquired: string;
  image: string;
  health: 'Thriving' | 'Good' | 'Fair' | 'Poor';
  lastWatered: string;
  status: 'OK' | 'Thirsty' | 'Needs Pruning';
  moistureLevel: number; // 0-100
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'In Transit' | 'Processing';
  items: string[];
}