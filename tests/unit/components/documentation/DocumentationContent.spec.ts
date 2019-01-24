import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';
import VueRouter from 'vue-router';
import routes from '@/routes';
import DocumentationContent from '@/components/documentation/DocumentationContent.vue';
import CharacterDetails from '@/components/character/CharacterDetails.vue';
import PlaceDetails from '@/components/place/PlaceDetails.vue';
import OccurenceDetails from '@/components/occurence/OccurenceDetails.vue';

const localVue = createLocalVue();

localVue.use(VueRouter);

describe('DocumentationContent', () => {
  let router: VueRouter;
  let wrapper: Wrapper<DocumentationContent>;

  beforeEach(() => {
    router = new VueRouter({routes});
    wrapper = shallowMount(DocumentationContent, {localVue, router});
  });

  it('should display character details', () => {
    router.push("/documentation/characters/1");
    expect(wrapper.find(CharacterDetails).exists()).toBe(true);
  });

  it('should display character with id 1', () => {
    router.push("/documentation/characters/1");
    expect(wrapper.find(CharacterDetails).props('id')).toBe(1);
  });

  it('should display place details', () => {
    router.push("/documentation/places/2");
    expect(wrapper.find(PlaceDetails).exists()).toBe(true);
  });

  it('should display place with id 2', () => {
    router.push("/documentation/places/2");
    expect(wrapper.find(PlaceDetails).props('id')).toBe(2);
  });

  it('should display occurence details', () => {
    router.push("/documentation/occurences/3");
    expect(wrapper.find(OccurenceDetails).exists()).toBe(true);
  });

  it('should display occurence with id 3', () => {
    router.push("/documentation/occurences/3");
    expect(wrapper.find(OccurenceDetails).props('id')).toBe(3);
  });
});
