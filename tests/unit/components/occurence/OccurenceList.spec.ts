import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import OccurenceList from '@/components/occurence/OccurenceList.vue';
import { cloneDeep } from 'lodash';
import VueRouter from 'vue-router';
import routes from '@/routes';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('OccurenceList', () => {
  let actions: any;
  let storeOptions: any;

  beforeEach(() => {
    actions = {
      getAllOccurences: jest.fn()
    };
    storeOptions = {
      modules: {
        occurences: {
          namespaced: true,
          state: {},
          actions
        }
      }
    }
  });

  it('should dispatches "getAllOccurences" when created', () => {
    const store = new Vuex.Store(cloneDeep(storeOptions));
    shallowMount(OccurenceList, {store, localVue});
    expect(actions.getAllOccurences).toHaveBeenCalled()
  });

  it('should display a line per occurence', () => {
    storeOptions.modules.occurences.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'},
        {id: 2, name: 'name2', description: 'description2'}
      ]
    };
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = shallowMount(OccurenceList, {store, localVue});
    expect(wrapper.findAll('li').length).toBe(2);
  });

  it('should create a link to occurence details', () => {
    storeOptions.modules.occurences.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'}
      ]
    };
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = mount(OccurenceList, {store, localVue, router});
    expect(wrapper.find('li > a').attributes('href')).toBe('#/documentation/occurences/1')
  });
});
