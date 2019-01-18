<template>
  <div class="event-list">
    <h2>Lieux</h2>
    <ul>
      <li v-for="event in events" :key="event.id" @click="selectEvent(event.id)">{{ event.name}}</li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Event } from '@/models/event';
import { Action, State } from 'vuex-class';

@Component
export default class EventList extends Vue {
  @State('all', { namespace: 'events' }) events!: Event[];
  @Action('getAllEvents', { namespace: 'events' }) getAllEvents: any;
  @Action('select', { namespace: 'documentation' }) select: any;

  created () {
    this.getAllEvents();
  }

  selectEvent (id: number) {
    this.select({ id, type: 'event' });
  }
}
</script>
