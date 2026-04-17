export type Priority = 'Low' | 'Medium' | 'High';

export interface Issue {
  id: number;
  title: string;
  priority: Priority;
  isResolved: boolean;
}