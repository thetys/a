import { DocumentationState, SelectedDocumentation } from './types';
import { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import { RootState } from '@/store/types';

const state: DocumentationState = {
  selected: {}
};

const getters: GetterTree<DocumentationState, RootState> = {
  selectedType: function (state): string | undefined {
    return state.selected.type;
  },
  selectedId: function (state): number | undefined {
    return state.selected.id;
  }
};

const actions: ActionTree<DocumentationState, RootState> = {
  select ({ commit }, selection: SelectedDocumentation) {
    commit('select', selection);
  }
};

const mutations: MutationTree<DocumentationState> = {
  select (state: DocumentationState, selection: SelectedDocumentation) {
    state.selected = selection;
  }
};

export const documentation: Module<DocumentationState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
