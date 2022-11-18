import { useFetch } from "../useFetch/useFetch";
import CharacterList from "./CharacterList";

const CharacterScreen = () => {
  const { characterData, isLoading } = useFetch(
    "https://hp-api.herokuapp.com/api/characters/house/gryffindor"
  );

  return (
    <div>
      <CharacterList props={characterData} loading={isLoading} />
    </div>
  );
};

export default CharacterScreen;
