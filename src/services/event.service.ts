import axios from 'axios';
import { Event } from '@/models/event';

const api = 'api';

class EventService {
  getEvents () {
    return axios.get<Event[]>(`${api}/events`);
  }
}

// Export a singleton istance
export const eventService = new EventService();
