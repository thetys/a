<template>
  <div class="place-list">
    <h2>Lieux</h2>
    <ul>
      <li v-for="place in places" :key="place.id" @click="selectPlace(place.id)">{{ place.name}}</li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Place } from '../../models/place';
import { Action, State } from 'vuex-class';

@Component
export default class PlaceList extends Vue {
  @State('all', { namespace: 'places' }) places!: Place[];
  @Action('getAllPlaces', { namespace: 'places' }) getAllPlaces: any;
  @Action('select', { namespace: 'documentation' }) select: any;

  created () {
    this.getAllPlaces();
  }

  selectPlace (id: number) {
    this.select({ id, type: 'place' });
  }
}
</script>
