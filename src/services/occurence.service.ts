import axios from 'axios';
import { Occurence } from '@/models/occurence';

const api = 'api';

class OccurenceService {
  getOccurences () {
    return axios.get<Occurence[]>(`${api}/occurences`);
  }
}

// Export a singleton istance
export const occurenceService = new OccurenceService();
