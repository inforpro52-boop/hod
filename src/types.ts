export interface Book {
  id: string;
  title: string;
  subtitle: string;
  coverUrl: string;
  shortSummary: string;
  fullSummary: string;
  publicationYear: string;
  publisher: string;
  pages: string;
  language: string;
  isbn: string; // Placeholder string if not yet provided: '[ISBN À FOURNIR]'
  excerpt?: string;
  reviews?: Array<{
    quote: string;
    source: string;
  }>;
  purchaseLinks?: Array<{
    platform: string;
    url: string;
    available: boolean;
  }>;
  relatedEvents?: string[];
}

export interface LegalDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyPoints: string[];
}

export interface ProjectEngagement {
  id: string;
  title: string;
  category: 'entrepreneuriat' | 'leadership' | 'jeunesse' | 'associatif' | 'initiatives';
  categoryLabel: string;
  year: string;
  role: string;
  description: string;
  impact: string;
  linkText?: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'Juridique' | 'Littérature' | 'Entrepreneuriat' | 'Leadership' | 'Conférences' | 'Événements' | 'Médias';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  tags: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  city: string;
  type: 'Conférence' | 'Dédicace' | 'Rencontre' | 'Intervention' | 'Événement professionnel';
  description: string;
  status: 'upcoming' | 'past';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'CONFÉRENCES' | 'DÉDICACES' | 'ÉVÉNEMENTS' | 'PROFESSIONNEL' | 'MÉDIAS';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
  securityAnswer: string;
  honeypot: string; // anti-spam
}
