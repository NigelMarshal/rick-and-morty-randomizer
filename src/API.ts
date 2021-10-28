export interface Character {
  id: number
  name: string
  species: string
  type: string
  gender: string
  origin: Object
  image: string
  episode: string[]
  url: string
  created: string
}

export const fetchCharacter = async (id: number): Promise<Character> => {
  const result: Response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  )

  if (!result.ok) {
    throw new Error('Something went wrong!')
  }

  return await result.json()
}
