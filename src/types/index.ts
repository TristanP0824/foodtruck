// Food truck domain types used across the application

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface ScheduleItem {
  day: string;
  hours: string;
  location?: string;
}
