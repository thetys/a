<template>
  <div class="occurence-list">
    <h2>Evénements</h2>
    <ul>
      <li v-for="occurence in occurences" :key="occurence.id" @click="selectOccurence(occurence.id)">{{ occurence.name}}</li>
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
  @Action('select', { namespace: 'documentation' }) select: any;

  created () {
    this.getAllOccurences();
  }

  selectOccurence (id: number) {
    this.select({ id, type: 'occurence' });
  }
}
</script>
