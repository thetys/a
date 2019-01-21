<template>
  <div class="occurence-details" v-if="this.occurence">
    <h1>{{ this.occurence.name }}</h1>
    <h3 v-if="this.occurence.end_date">Du {{ this.occurence.start_date | moment('D MMMM Y')}} au {{ this.occurence.end_date | moment('D MMMM Y')}}</h3>
    <h3 v-else>{{ this.occurence.start_date | moment('D MMMM Y')}}</h3>
    <p v-html="this.occurence.description"></p>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Occurence } from '@/models/occurence';

const occurencesModule = namespace('occurences');

@Component
export default class OccurenceDetails extends Vue {
  @Prop(Number) id!: number;

  @occurencesModule.Getter getOccurenceById: any;

  get occurence (): Occurence {
    return this.getOccurenceById(this.id);
  }
}
</script>
