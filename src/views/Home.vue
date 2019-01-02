<template>
  <div class="home">
    <CharacterList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CharacterList from '@/components/CharacterList.vue';

@Component({
  components: {
    CharacterList
  }
})
export default class Home extends Vue {}
</script>
