<template>
  <div class="character-list">
    <h2>Personnages</h2>
    <ul>
      <li v-for="character in characters" :key="character.id" @click="selectCharacter(character.id)">{{ character.name}}</li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character } from '../../models/character';
import { Action, State } from 'vuex-class';

@Component
export default class CharacterList extends Vue {
  @State('all', { namespace: 'characters' }) characters!: Character[];
  @Action('getAllCharacters', { namespace: 'characters' }) getAllCharacters: any;
  @Action('select', { namespace: 'documentation' }) select: any;

  created () {
    this.getAllCharacters();
  }

  selectCharacter (id: number) {
    this.select({ id, type: 'character' });
  }
}
</script>
