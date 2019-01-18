<template>
  <div class="event-details">
    <h1>{{ event.name }}</h1>
    <p>{{ event.description }}</p>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const eventsModule = namespace('events');

@Component
export default class EventDetails extends Vue {
  @Prop() id!: number;

  @eventsModule.Getter getEventById: any;

  get event () {
    return this.getEventById(this.id);
  }
}
</script>
