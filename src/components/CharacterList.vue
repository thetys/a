<template>
  <div class="character-list">
    <h2>Personnages</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">{{ character.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Character } from '@/models/character';
import { characterService } from '@/services/character.service';

@Component
export default class CharacterList extends Vue {
  characters: Character[] = [];

  created () {
    this.getCharacters();
  }

  private getCharacters () {
    this.characters = [];
    characterService.getCharacters().then(response => (this.characters = response.data));
  }
}
</script>
