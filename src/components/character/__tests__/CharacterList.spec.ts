import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CharacterList from '../CharacterList.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('CharacterList', () => {
  let actions;
  let store: any;

  beforeEach(() => {
    actions = {
      getAllCharacters: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        characters: {
          namespaced: true,
          state: {},
          actions
        }
      }
    });
  });

  it('should contains a character-list class', () => {
    const wrapper = shallowMount(CharacterList, {store, localVue});
    expect(wrapper.contains('div.character-list')).toBe(true);
  });
});
