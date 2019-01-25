import { createLocalVue, shallowMount } from '@vue/test-utils';
import PlaceDetails from '@/components/place/PlaceDetails.vue';
import { Place } from '@/models/place';

const localVue = createLocalVue();

localVue.filter('moment', (date: any) => date);

describe('PlaceDetails', () => {
  let place: Place;

  beforeEach(() => {
    place = {id: 0, name: '', description: ''}
  });

  it('should not render anything if place is undefined', () => {
    const wrapper = shallowMount(PlaceDetails, {
      localVue,
      computed: {
        place: () => undefined
      }
    });
    expect(wrapper.isEmpty()).toBe(true);
  });

  it('should render place name in h1', () => {
    place.name = 'name';
    const wrapper = shallowMount(PlaceDetails, {
      localVue,
      computed: {
        place: () => place
      }
    });
    expect(wrapper.find('h1').text()).toBe(place.name);
  });

  it('should render place decription in a p', () => {
    place.description = 'description';
    const wrapper = shallowMount(PlaceDetails, {
      localVue,
      computed: {
        place: () => place
      }
    });
    expect(wrapper.find('p').text()).toBe(place.description);
  });

  it('should render place decription as html', () => {
    place.description = '<a href="#">description</a>';
    const wrapper = shallowMount(PlaceDetails, {
      localVue,
      computed: {
        place: () => place
      }
    });
    expect(wrapper.find('p').contains('a')).toBe(true);
  });
});
