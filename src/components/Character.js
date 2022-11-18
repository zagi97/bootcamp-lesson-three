import characterStyle from "./CharacterList.module.css";
const Character = (final_character) => {
  return (
    <>
      {final_character.loading && <p> Fetching data...</p>}

      <div>
        <li className={characterStyle["character-name"]}>
          {final_character.name}
        </li>
        <img
          className={characterStyle["character-img"]}
          src={final_character.image}
          alt={final_character.name}
        />
      </div>
    </>
  );
};

export default Character;
