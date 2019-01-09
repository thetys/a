import { Place } from '@/models/place';
import { PlacesState } from './types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { placeService } from '@/services/place.service';

const state: PlacesState = {
  all: []
};

const getters: GetterTree<PlacesState, RootState> = {
  getPlaceById: (state) => (id: number): Place|undefined => {
    return state.all.find(char => char.id === id);
  }
};

const actions: ActionTree<PlacesState, RootState> = {
  getAllPlaces ({ commit }) {
    placeService.getPlaces().then(
      value => commit('setPlaces', value.data)
    );
  }
};

const mutations: MutationTree<PlacesState> = {
  setPlaces (state: PlacesState, places: Place[]) {
    state.all = places;
  }
};

export const places: Module<PlacesState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
