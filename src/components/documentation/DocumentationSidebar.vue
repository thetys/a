<template>
  <div>
    <CharacterList />
    <PlaceList />
    <EventList />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '@/components/character/CharacterList';
import PlaceList from '@/components/place/PlaceList';
import EventList from '@/components/event/EventList';

@Component({
  components: { CharacterList, PlaceList, EventList }
})
export default class DocumentationSidebar extends Vue {
}
</script>
