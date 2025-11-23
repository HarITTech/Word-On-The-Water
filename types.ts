import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface BookCollection {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  type: 'Music' | 'Poetry' | 'Reading' | 'Launch';
  price?: string;
  ticketLink?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
  action?: {
    label: string;
    link: string; // using string for internal router path or external url
    isExternal?: boolean;
  };
}
