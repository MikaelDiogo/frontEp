export interface INews {
  id: number | string;
  title: string;
  content: string;
  image: string;
  created_at: Date | string;
  updated_at?: Date | string;
}