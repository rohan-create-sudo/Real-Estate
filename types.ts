
export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}
