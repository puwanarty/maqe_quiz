export interface IAuthor {
  id: number
  name: string
  role: string
  place: string
  avatar_url: string
}

export interface IPost {
  id: number
  author_id: number
  title: string
  body: string
  image_url: string
  created_at: string
}
