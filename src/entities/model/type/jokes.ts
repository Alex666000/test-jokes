export type JokesResponse = {
  result: Joke[]
  total: number
}

type Joke = {
  created_at: string
  id: string
  value: string
} & Partial<{
  categories: string[]
  icon_url: string
  updated_at: string
  url: string
}>
