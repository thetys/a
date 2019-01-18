<template>
  <div class="place-list">
    <h2>Lieux</h2>
    <ul>
      <li v-for="place in places" :key="place.id">
        <router-link :to="{ name: 'documentation-details', params: { id: place.id, type: 'places' } }">{{ place.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Place } from '@/models/place';
import { Action, State } from 'vuex-class';

@Component
export default class PlaceList extends Vue {
  @State('all', { namespace: 'places' }) places!: Place[];
  @Action('getAllPlaces', { namespace: 'places' }) getAllPlaces: any;

  created () {
    this.getAllPlaces();
  }
}
</script>
