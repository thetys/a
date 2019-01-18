<template>
  <div class="character-list">
    <h2>Personnages</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">
        <router-link :to="{ name: 'documentation-details', params: { id: character.id, type: 'characters' } }">{{ character.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character } from '@/models/character';
import { Action, State } from 'vuex-class';

@Component
export default class CharacterList extends Vue {
  @State('all', { namespace: 'characters' }) characters!: Character[];
  @Action('getAllCharacters', { namespace: 'characters' }) getAllCharacters: any;

  created () {
    this.getAllCharacters();
  }
}
</script>
