<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="elem in data" :key="elem.id">
        <router-link :to="{ name: 'documentation-details', params: { id: elem.id, type: this.resourceName } }">
          {{elem.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<!--suppress JSUnusedGlobalSymbols -->
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { DocumentationSidebarItem } from '@/models/documentation';

@Component
export default class DocumentationSidebarList extends Vue {
  @Prop(String) resourceName!: string;
  @Prop(String) title!: string;
  @State('all', { namespace: this.resourceName }) data!: DocumentationSidebarItem[];
  // @Action('getAll', { namespace: this.resourceName }) getAll: any;

  created () {
    console.log(this.resourceName);
    // this.getAll();
  }
}
</script>
