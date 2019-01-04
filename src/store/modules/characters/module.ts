import { Character } from '@/models/character';
import { CharactersState } from './types';
import { Module } from 'vuex';
import { RootState } from '@/store/types';

const state: CharactersState = {
  all: []
};

const mutations = {
  setCharacters (state: CharactersState, characters: Character[]) {
    state.all = characters;
  }
};

export const characters: Module<CharactersState, RootState> = {
  namespaced: true,
  state,
  mutations
};
