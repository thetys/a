<template>
  <div class="sidebar">
    <CharacterList />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from './CharacterList';

@Component({
  components: { CharacterList }
})
export default class DocumentationSidebar extends Vue {
}
</script>
