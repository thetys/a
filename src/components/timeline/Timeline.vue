<template>
  <div id="timeline-embed" style="width: 100%; height: 600px"></div>
</template>

<script lang="ts">
/// <reference path="../../../node_modules/@types/timelinejs3/index.d.ts" />
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Event } from '@/models/event';
import moment from 'moment';

@Component
export default class TimelineVue extends Vue {
  @State('all', { namespace: 'events' }) events!: Event[];
  @Action('getAllEvents', { namespace: 'events' }) getAllevents: any;
  timeline!: TL.ITimeline;
  timelineJson: TL.ITimelineConfig = {
    events: []
  };
  timelineOptions: TL.ITimelineOptions = {
    debug: true,
    language: 'fr'
  };

  async mounted () {
    await this.getAllevents();
    this.timelineJson['events'] = await this.events.map<TL.ITimelineSlideData>(event => {
      let ret: TL.ITimelineSlideData = {
        text: {
          headline: event.name
        }
      };
      const startDate = moment(event.start_date);
      ret.start_date = {
        year: startDate.year(),
        month: startDate.month(),
        day: startDate.day()
      };
      if (event.end_date) {
        const endDate = moment(event.end_date === 'now' ? {} : event.end_date);
        ret.end_date = {
          year: endDate.year(),
          month: endDate.month(),
          day: endDate.day()
        };
      }
      return ret;
    });
    this.timeline = new TL.Timeline('timeline-embed', this.timelineJson, this.timelineOptions);
  }

  updated () {
    this.timeline.updateDisplay();
  }
}
</script>
