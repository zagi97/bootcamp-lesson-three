import Character from "./Character";
const CharacterList = (data) => {
  return (
    <div>
      {data.loading && <p> Fetching data...</p>}
      {data.props.slice(0, 10).map((character) => (
        <Character
          name={character.name}
          image={character.image}
          loading={data.loading}
        ></Character>
      ))}
    </div>
  );
};

export default CharacterList;
