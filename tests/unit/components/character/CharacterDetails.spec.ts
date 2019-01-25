import { createLocalVue, shallowMount } from '@vue/test-utils';
import CharacterDetails from '@/components/character/CharacterDetails.vue';
import { Character } from '@/models/character';

const localVue = createLocalVue();

localVue.filter('moment', (date: any) => date);

describe('CharacterDetails', () => {
  let character: Character;

  beforeEach(() => {
    character = {id: 0, name: '', description: ''}
  });

  it('should not render anything if character is undefined', () => {
    const wrapper = shallowMount(CharacterDetails, {
      localVue,
      computed: {
        character: () => undefined
      }
    });
    expect(wrapper.isEmpty()).toBe(true);
  });

  it('should render character name in h1', () => {
    character.name = 'name';
    const wrapper = shallowMount(CharacterDetails, {
      localVue,
      computed: {
        character: () => character
      }
    });
    expect(wrapper.find('h1').text()).toBe(character.name);
  });

  it('should render character decription in a p', () => {
    character.description = 'description';
    const wrapper = shallowMount(CharacterDetails, {
      localVue,
      computed: {
        character: () => character
      }
    });
    expect(wrapper.find('p').text()).toBe(character.description);
  });

  it('should render character decription as html', () => {
    character.description = '<a href="#">description</a>';
    const wrapper = shallowMount(CharacterDetails, {
      localVue,
      computed: {
        character: () => character
      }
    });
    expect(wrapper.find('p').contains('a')).toBe(true);
  });
});
