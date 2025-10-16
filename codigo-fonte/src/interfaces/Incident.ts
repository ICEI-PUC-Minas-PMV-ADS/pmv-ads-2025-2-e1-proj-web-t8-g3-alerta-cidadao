interface Incident {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
  Owner: string;
  images?: string[];
  location: string;
}
