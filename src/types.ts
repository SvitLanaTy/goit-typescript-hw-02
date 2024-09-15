export interface Image {
  id: string;
  description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
}
export interface Data {
  results: Image[] | [];
  total: number;
  total_pages: number;
}
