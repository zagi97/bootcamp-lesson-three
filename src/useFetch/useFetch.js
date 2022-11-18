import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [characterData, setCharacterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchCharactersData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCharacterData(data);
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchCharactersData();
  }, [fetchCharactersData]);

  return { characterData, isLoading };
};
