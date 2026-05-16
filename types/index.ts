export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  featured?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  detail?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}
