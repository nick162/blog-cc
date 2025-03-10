import { User } from "./user";

export default interface Blog {
  objectId: string;
  category: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  created: number;
  views?: number;
  user: User;
}
