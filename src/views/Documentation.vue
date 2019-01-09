<template>
  <div class="documentation">
    <DocumentationSidebar class="sidebar" />
    <DocumentationContent class="content" />
  </div>
</template>

<!--suppress TypeScriptCheckImport -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentationSidebar from '@/components/DocumentationSidebar.vue';
import DocumentationContent from '@/components/DocumentationContent.vue';

@Component({
  components: {
    DocumentationSidebar,
    DocumentationContent
  }
})
export default class Documentation extends Vue {
}
</script>

<style scoped>
  .sidebar {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 250px;
    position: fixed;
    background-color: cornsilk;
    overflow: auto;
  }

  .content {
    margin-left: 250px;
    padding: 1px 16px;
  }
</style>
