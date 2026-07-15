/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  imageUrl: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  category: 'Offshore' | 'Onshore' | 'Infrastructure' | 'Engineering' | 'Fabrication';
  timeline: string;
  clientSatisfaction: string;
  stats: { label: string; value: string }[];
  imageUrl: string;
  coordinates: { lat: number; lng: number }; // For the interactive project map
  status: 'Completed' | 'Active' | 'In Progress';
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salaryRange: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Industry Updates' | 'Technology' | 'Safety News' | 'Company Announcements' | 'Equipment Innovations' | 'Energy Market Insights';
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl: string;
  readTime: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Oil Rigs' | 'Heavy Equipment' | 'Construction' | 'Engineering Teams' | 'Projects' | 'Industrial Facilities';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClientDocument {
  id: string;
  name: string;
  type: 'PDF' | 'XLSX' | 'DOCX' | 'ZIP' | 'IMAGE';
  size: string;
  uploadedAt: string;
  status: 'Approved' | 'Pending Verification' | 'Requires Review';
  category: 'Inspection Checklist' | 'Contract' | 'Certificate of Insurance' | 'Engineering Spec' | 'HSE Plan';
  downloadUrl: string;
}
