<template>
  <component v-if="selectedType"
             v-bind:is="selectedComponent"
             v-bind:id="selectedId" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import CharacterDetails from '../character/CharacterDetails.vue';
import PlaceDetails from '../place/PlaceDetails.vue';

@Component({
  components: { CharacterDetails, PlaceDetails }
})
export default class DocumentationContent extends Vue {
  @Getter('selectedType', { namespace: 'documentation' }) selectedType?: string;
  @Getter('selectedId', { namespace: 'documentation' }) selectedId?: string;

  get selectedComponent () {
    return this.selectedType ? this.selectedType.toLowerCase() + '-details' : '';
  }
}
</script>
