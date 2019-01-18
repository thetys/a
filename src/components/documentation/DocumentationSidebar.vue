<template>
  <div>
    <CharacterList />
    <PlaceList />
    <OccurenceList />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '@/components/character/CharacterList';
import PlaceList from '@/components/place/PlaceList';
import OccurenceList from '@/components/occurence/OccurenceList';

@Component({
  components: { CharacterList, PlaceList, OccurenceList }
})
export default class DocumentationSidebar extends Vue {
}
</script>
