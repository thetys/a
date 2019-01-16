<template>
  <div>{{timeline}}</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const TL: any;

@Component
export default class TimelineVue extends Vue {
  timeline: any;

  created () {
    this.timeline = new TL.Timeline('timeline-embed',
      'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  }
}
</script>
