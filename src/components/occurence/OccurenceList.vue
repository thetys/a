<template>
  <div class="occurence-list">
    <h2>Evénements</h2>
    <ul>
      <li v-for="occurence in occurences" :key="occurence.id">
        <router-link :to="{ name: 'documentation-details', params: { id: occurence.id, type: 'occurences' } }">{{ occurence.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Occurence } from '@/models/occurence';
import { Action, State } from 'vuex-class';

@Component
export default class OccurenceList extends Vue {
  @State('all', { namespace: 'occurences' }) occurences!: Occurence[];
  @Action('getAllOccurences', { namespace: 'occurences' }) getAllOccurences: any;

  created () {
    this.getAllOccurences();
  }
}
</script>
