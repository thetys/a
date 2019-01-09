import { Character } from '@/models/character';
import { CharactersState } from './types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '@/store/types';
import { characterService } from '@/services/character.service';

const state: CharactersState = {
  all: []
};

const getters: GetterTree<CharactersState, RootState> = {
  getCharacterById: (state) => (id: number): Character|undefined => {
    return state.all.find(char => char.id === id);
  }
};

const actions: ActionTree<CharactersState, RootState> = {
  getAllCharacters ({ commit }) {
    characterService.getCharacters().then(
      value => commit('setCharacters', value.data)
    );
  }
};

const mutations: MutationTree<CharactersState> = {
  setCharacters (state: CharactersState, characters: Character[]) {
    state.all = characters;
  }
};

export const characters: Module<CharactersState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
