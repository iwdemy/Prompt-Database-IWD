export interface Prompt {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
}

export const categories = [
  "Semua",
  "Dev & IT",
  "Other",
  "Career & Biz",
  "Education",
  "Marketing",
  "Writing",
  "Creative",
  "Ekstrak Info Buku",
  "Belajar Cepat",
  "Teknik AI",
  "Exercise"
];

export const prompts: Prompt[] = [];
