import { Occurence } from '@/models/occurence';
import { OccurencesState } from './types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { occurenceService } from '@/services/occurence.service';

const state: OccurencesState = {
  all: []
};

const getters: GetterTree<OccurencesState, RootState> = {
  getOccurenceById: (state) => (id: number): Occurence|undefined => {
    return state.all.find(char => char.id === id);
  }
};

const actions: ActionTree<OccurencesState, RootState> = {
  getAllOccurences ({ commit }) {
    return occurenceService.getOccurences().then(
      value => commit('setOccurences', value.data)
    );
  }
};

const mutations: MutationTree<OccurencesState> = {
  setOccurences (state: OccurencesState, occurences: Occurence[]) {
    state.all = occurences;
  }
};

export const occurences: Module<OccurencesState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
