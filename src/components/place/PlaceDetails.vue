<template>
  <div class="place-details">
    <h1>{{ place.name }}</h1>
    <p>{{ place.description }}</p>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const placesModule = namespace('places');

@Component
export default class PlaceDetails extends Vue {
  @Prop() id!: number;

  @placesModule.Getter getPlaceById: any;

  get place () {
    return this.getPlaceById(this.id);
  }
}
</script>
