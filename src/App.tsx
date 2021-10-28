import React, { useState, useEffect } from 'react'
import { fetchCharacter, Character } from './API';
import CharacterCard from './Components/CharacterCard/CharacterCard'

function App() {

  const [characterData, setCharacterData] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState(2);

  useEffect(() => {
    const fetchFromApi = async () => {
      setIsLoading(true);
      const result = await fetchCharacter(characterId);
      setIsLoading(false);
      setCharacterData(result);
    }
    fetchFromApi();
  }, [characterId])

  return (
    <div className="bg-white mt-7">

      <div className="container mx-auto max-w-screen-sm">
        <div className="text-center">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <CharacterCard name={characterData.name} image={characterData.image} />
              <button onClick={() => setCharacterId(Math.floor(Math.random() * 10 + 1))}>
                Random
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default App
