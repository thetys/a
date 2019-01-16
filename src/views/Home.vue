<template>
  <div class="home">
    <TimelineVue />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '@/components/character/CharacterList.vue';
import TimelineVue from '@/components/timeline/Timeline.vue';

@Component({
  components: {
    CharacterList,
    TimelineVue
  }
})
export default class Home extends Vue {}
</script>
