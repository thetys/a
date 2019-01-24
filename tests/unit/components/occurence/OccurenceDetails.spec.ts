import { createLocalVue, shallowMount } from '@vue/test-utils';
import OccurenceDetails from '@/components/occurence/OccurenceDetails.vue';
import { Occurence } from '@/models/occurence';

const localVue = createLocalVue();

localVue.filter('moment', (date: any) => date);

describe('OccurenceDetails', () => {
  let occurence: Occurence;

  beforeEach(() => {
    occurence = {id: 0, name: '', description: '', start_date: ''}
  });

  it('should not render anything if occurence is undefined', () => {
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => undefined
      }
    });
    expect(wrapper.isEmpty()).toBe(true);
  });

  it('should render occurence name in h1', () => {
    occurence.name = 'name';
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => occurence
      }
    });
    expect(wrapper.find('h1').text()).toBe(occurence.name);
  });

  it('should render occurence decription in a p', () => {
    occurence.description = 'description';
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => occurence
      }
    });
    expect(wrapper.find('p').text()).toBe(occurence.description);
  });

  it('should render occurence decription as html', () => {
    occurence.description = '<a href="#">description</a>';
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => occurence
      }
    });
    expect(wrapper.find('p').contains('a')).toBe(true);
  });

  it('should only render start_date if end_date is undefined', () => {
    occurence.start_date = '01/01/1970';
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => occurence
      }
    });
    expect(wrapper.find('h3').text()).toBe(occurence.start_date);
  });

  it('should render both dates if end_date is defined', () => {
    occurence.start_date = '01/01/1970';
    occurence.end_date = '01/01/2000';
    const wrapper = shallowMount(OccurenceDetails, {
      localVue,
      computed: {
        occurence: () => occurence
      }
    });
    expect(
      wrapper.find('h3').text().includes(occurence.start_date) &&
      wrapper.find('h3').text().includes(occurence.end_date)
    ).toBe(true);
  });
});
