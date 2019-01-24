import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import PlaceList from '@/components/place/PlaceList.vue';
import { cloneDeep } from 'lodash';
import VueRouter from 'vue-router';
import routes from '@/routes';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe('PlaceList', () => {
  let actions: any;
  let storeOptions: any;

  beforeEach(() => {
    actions = {
      getAllPlaces: jest.fn()
    };
    storeOptions = {
      modules: {
        places: {
          namespaced: true,
          state: {},
          actions
        }
      }
    }
  });

  it('should dispatches "getAllPlaces" when created', () => {
    const store = new Vuex.Store(cloneDeep(storeOptions));
    shallowMount(PlaceList, {store, localVue});
    expect(actions.getAllPlaces).toHaveBeenCalled()
  });

  it('should display a line per place', () => {
    storeOptions.modules.places.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'},
        {id: 2, name: 'name2', description: 'description2'}
      ]
    };
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = shallowMount(PlaceList, {store, localVue});
    expect(wrapper.findAll('li').length).toBe(2);
  });

  it('should create a link to place details', () => {
    storeOptions.modules.places.state = {
      all: [
        {id: 1, name: 'name1', description: 'description1'}
      ]
    };
    const router = new VueRouter({ routes });
    const store = new Vuex.Store(cloneDeep(storeOptions));
    const wrapper = mount(PlaceList, {store, localVue, router});
    expect(wrapper.find('li > a').attributes('href')).toBe('#/documentation/places/1')
  });
});
