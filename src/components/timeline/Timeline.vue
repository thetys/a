<template>
  <div id="timeline-embed" style="width: 100%; height: 600px"></div>
</template>

<script lang="ts">
/// <reference path="../../../node_modules/@types/timelinejs3/index.d.ts" />
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { Occurence } from '@/models/occurence';
import moment from 'moment';

@Component
export default class TimelineVue extends Vue {
  @State('all', { namespace: 'occurences' }) occurences!: Occurence[];
  @Action('getAllOccurences', { namespace: 'occurences' }) getAlloccurences: any;
  timeline!: TL.ITimeline;
  timelineJson: TL.ITimelineConfig = {
    events: []
  };
  timelineOptions: TL.ITimelineOptions = {
    debug: process.env.NODE_ENV !== 'production',
    language: 'fr'
  };

  async mounted () {
    await this.getAlloccurences();
    this.timelineJson['events'] = await this.occurences.map<TL.ITimelineSlideData>(this.prepare);
    // noinspection TypeScriptValidateTypes
    this.timeline = new TL.Timeline('timeline-embed', this.timelineJson, this.timelineOptions);
  }

  updated () {
    this.timeline.updateDisplay();
  }

  private prepare (occurence: Occurence) {
    let text: any = {
      headline: occurence.name
    };
    if (occurence.description) {
      text['text'] = occurence.description;
    }
    let ret: TL.ITimelineSlideData = {
      text: text
    };
    ret.start_date = this.dateStringToObject(occurence.start_date);
    if (occurence.end_date) {
      ret.end_date = this.dateStringToObject(occurence.end_date === 'now' ? {} : occurence.end_date);
    }
    return ret;
  }

  private dateStringToObject (date: moment.MomentInput) {
    const dateObject = moment(date);
    return {
      year: dateObject.year(),
      month: dateObject.month() + 1,
      day: dateObject.date(),
      hour: dateObject.hour(),
      minute: dateObject.minute(),
      second: dateObject.second()
    };
  }
}
</script>
