import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CharacterList from '@/components/character/CharacterList.vue';
import { cloneDeep } from 'lodash';
import VueRouter from 'vue-router';
import routes from '@/routes';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('CharacterList', () => {
  let actions: any;
  let storeOptions: any;

  beforeEach(() => {
    actions = {
      getAllCharacters: jest.fn()
    };
    storeOptions = {
      modules: {
        characters: {
          namespaced: true,
          state: {},
          actions
        }
      }
    }
  });

  it('should dispatches "getAllCharacters" when created', () => {
    const store = new Vuex.Store(cloneDeep(storeOptions));
    shallowMount(CharacterList, {store, localVue});
    expect(actions.getAllCharacters).toHaveBeenCalled()
  });

  it('should display a line per character', () => {
    storeOptions.modules.characters.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'},
        {id: 2, name: 'name2', description: 'description2'}
      ]
    };
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = shallowMount(CharacterList, {store, localVue});
    expect(wrapper.findAll('li').length).toBe(2);
  });

  it('should create a link to character details', () => {
    storeOptions.modules.characters.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'}
      ]
    };
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = mount(CharacterList, {store, localVue, router});
    expect(wrapper.find('li > a').attributes('href')).toBe('#/documentation/characters/1')
  });
});
