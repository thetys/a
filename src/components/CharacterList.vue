<template>
  <div class="character-list">
    <h2>Personnages</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">{{ character.name}}</li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character } from '@/models/character';
import { Action, State } from 'vuex-class';

const namespace: string = 'characters';

@Component
export default class CharacterList extends Vue {
  @State('all', { namespace }) characters!: Character[];
  @Action('getAllCharacters', { namespace }) getAllCharacters: any;

  created () {
    this.getAllCharacters();
  }
}
</script>
