<template>
  <div class="character-details">
    <h1>{{ character.name }}</h1>
    <p>{{ character.description }}</p>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const charactersModule = namespace('characters');

@Component
export default class CharacterDetails extends Vue {
  @Prop() id!: number;

  @charactersModule.Getter getCharacterById: any;

  get character () {
    return this.getCharacterById(this.id);
  }
}
</script>
