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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import query from '@/queries/places.gql';

@Component({
  apollo: {
    places: {
      query: query,
      prefetch: true
    }
  }
})
export default class PlaceList extends Vue {
  created () {
    console.log(query);
    console.log(this.$apollo.queries);
  }
}
</script>
