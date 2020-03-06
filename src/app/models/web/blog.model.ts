export interface Post {
  mainImage: String;
  secondaryImage: String;
  slug: String;
  title: String;
  content: String;
  date: String;
  tags: String[];
  status: String;
}

export interface WebBlog {
  posts: Post[]
}
