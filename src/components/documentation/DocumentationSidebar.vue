<template>
  <div>
    <CharacterList />
    <PlaceList />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '../character/CharacterList';
import PlaceList from '../place/PlaceList';

@Component({
  components: { CharacterList, PlaceList }
})
export default class DocumentationSidebar extends Vue {
}
</script>
