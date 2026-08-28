export interface ProductAlternative {
  name: string;
  brand: string;
  ecoScore: number;
  carbonKg: number;
  whyBetter: string;
}

export interface ProductAnalysis {
  productName: string;
  ecoScore: number;
  carbonKg: number;
  carbonLevel: "Low" | "Medium" | "High";
  greenwashingRisk: "Low" | "Medium" | "High";
  greenwashingDetails: string;
  highlights: string[];
  insights: string[];
  alternatives: ProductAlternative[];
  isSandbox?: boolean;
}

export interface DemoProduct {
  id: string;
  name: string;
  category: string;
  emoji: string;
  placeholderName: string;
}

export interface StepGuide {
  number: number;
  title: string;
  description: string;
  codeSnippet?: string;
}

export interface StatMetric {
  value: string;
  label: string;
  subtext: string;
  colorClass: string;
}

export interface CompareRow {
  metric: string;
  traditional: string;
  ecoCart: string;
  isWin: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
