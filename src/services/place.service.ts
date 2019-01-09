import axios from 'axios'
import {Place} from '@/models/place';

const api = 'api';

class PlaceService {
  getPlaces() {
    return axios.get<Place[]>(`${api}/places`);
  }
}

// Export a singleton istance
export const placeService = new PlaceService();
