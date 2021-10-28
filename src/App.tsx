import React, { useState, useEffect } from 'react'
import { fetchCharacter, Character } from './API';
import CharacterCard from './Components/CharacterCard/CharacterCard'

function App() {

  const [characterData, setCharacterData] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(false);
  const [characterId, setCharacterId] = useState(1);

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
              <CharacterCard
                name={characterData.name}
                image={characterData.image}
                species={characterData.species}
                type={characterData.type}
                gender={characterData.gender}
              />
              <button className="mt-7 animate-bounce inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                onClick={() => setCharacterId(Math.floor(Math.random() * (671 - 1) + 1))}>
                <span>Click to randomize!</span>
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default App
