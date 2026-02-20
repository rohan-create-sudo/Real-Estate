
import { Property, NavLink, StatItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Properties', path: '/properties' },
  { label: 'Contact', path: '/contact' },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Obsidian Sky',
    price: '$2,450,000',
    location: 'Lower Manhattan, NY',
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000',
    beds: 3,
    baths: 2,
    sqft: 2800,
    tags: ['Skyline View', 'Smart Home'],
    description: 'A masterpiece of contemporary architecture, offering panoramic views of the Hudson River and the city that never sleeps.'
  },
  {
    id: '2',
    title: 'Lumina Residences',
    price: '$1,890,000',
    location: 'Beverly Hills, CA',
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000',
    beds: 4,
    baths: 4,
    sqft: 3500,
    tags: ['Infinity Pool', 'Private Gym'],
    description: 'Bask in the California sun in this expansive glass villa where indoor and outdoor living merge seamlessly.'
  },
  {
    id: '3',
    title: 'Neon Garden Loft',
    price: '$980,000',
    location: 'Shoreditch, London',
    type: 'Loft',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000',
    beds: 2,
    baths: 2,
    sqft: 1400,
    tags: ['Industrial Design', 'Art District'],
    description: 'A creative sanctuary featuring 15ft ceilings, exposed brick, and a private rooftop garden in the heart of London.'
  },
  {
    id: '4',
    title: 'Azure Waters',
    price: '$3,200,000',
    location: 'Palm Jumeirah, Dubai',
    type: 'Mansion',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=2000',
    beds: 5,
    baths: 6,
    sqft: 6200,
    tags: ['Beachfront', 'Underground Parking'],
    description: 'Experience unparalleled luxury on the edge of the world. Private beach access and custom marble interiors.'
  },
];

export const STATS: StatItem[] = [
  { value: 120, label: 'Properties Sold', suffix: '+' },
  { value: 45, label: 'Active Listings', suffix: '' },
  { value: 12, label: 'Years Experience', suffix: '' },
  { value: 98, label: 'Happy Clients', suffix: '%' },
];
