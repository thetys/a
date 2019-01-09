<template>
  <div>
    <CharacterList />
    <PlaceList />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from './CharacterList';
import PlaceList from './PlaceList';

@Component({
  components: { CharacterList, PlaceList }
})
export default class DocumentationSidebar extends Vue {
}
</script>
