import { Event } from '@/models/event';
import { EventsState } from './types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { eventService } from '@/services/event.service';

const state: EventsState = {
  all: []
};

const getters: GetterTree<EventsState, RootState> = {
  getEventById: (state) => (id: number): Event|undefined => {
    return state.all.find(char => char.id === id);
  }
};

const actions: ActionTree<EventsState, RootState> = {
  getAllEvents ({ commit }) {
    return eventService.getEvents().then(
      value => commit('setEvents', value.data)
    );
  }
};

const mutations: MutationTree<EventsState> = {
  setEvents (state: EventsState, events: Event[]) {
    state.all = events;
  }
};

export const events: Module<EventsState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
