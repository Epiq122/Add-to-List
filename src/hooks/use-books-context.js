import { useContext } from 'react';
import GamesContext from '../context/games';

function useGamesContext() {
  return useContext(GamesContext);
}

export default useGamesContext;
