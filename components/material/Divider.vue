<script setup lang="ts">
  defineProps<{
    variant?: boolean
  }>()
</script>

<template>
  <hr
    class="material-divider"
    :class="{ 'material-divider--variant': variant }"
    v-bind="$attrs"
  />
</template>

<style scoped>
  .material-divider {
    border: none;
    border-top: 1px solid var(--md-sys-color-outline);
  }
  .material-divider--variant {
    border-color: var(--md-sys-color-outline-variant);
  }
</style>
