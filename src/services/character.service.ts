import axios from 'axios';
import { Character } from '@/models/character';

const api = 'api';

class CharacterService {
  getCharacters () {
    return axios.get<Character[]>(`${api}/characters`);
  }
}

// Export a singleton istance
export const characterService = new CharacterService();
