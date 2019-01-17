<template>
  <div id="timeline-embed"></div>
</template>

<script lang="ts">
/// <reference path="../../../node_modules/@types/timelinejs3/index.d.ts" />
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimelineVue extends Vue {
  timeline!: TL.ITimeline;

  mounted () {
    this.timeline = new TL.Timeline('timeline-embed',
      'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  }

  updated () {
    this.timeline.updateDisplay();
  }
}
</script>
