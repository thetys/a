<template>
  <component v-if="this.$route.params['type']"
             :is="selectedComponent"
             :id="selectedId" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterDetails from '@/components/character/CharacterDetails.vue';
import PlaceDetails from '@/components/place/PlaceDetails.vue';
import OccurenceDetails from '@/components/occurence/OccurenceDetails.vue';

@Component({
  components: { CharacterDetails, PlaceDetails, OccurenceDetails }
})
export default class DocumentationContent extends Vue {
  get selectedId (): number {
    return Number(this.$route.params['id']);
  }

  get selectedComponent () {
    return this.$route.params['type'] ? this.$route.params['type'].replace(/s$/, '').toLowerCase() + '-details' : '';
  }
}
</script>
