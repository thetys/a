<template>
    <DocumentationSidebar />
</template>

<!--suppress TypeScriptCheckImport -->
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DocumentationSidebar from '@/components/DocumentationSidebar.vue';

@Component({
  components: {
    DocumentationSidebar
  }
})
export default class Documentation extends Vue {}
</script>
