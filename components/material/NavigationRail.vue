<script setup lang="ts">
import type { VNode } from 'vue'
defineSlots<{
  fab: VNode
  'link-list': VNode
}>()
</script>

<template>
  <nav class="navigation-rail v-stack">
    <div class="fab-wrapper">
      <slot name="fab" />
    </div>
    <div class="v-stack link-list">
      <slot name="link-list" />
    </div>
  </nav>
</template>

<style scoped>
.navigation-rail {
  height: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 5.5rem;
  padding: 2rem 0;
  gap: 0;
}

.fab-wrapper {
  margin-bottom: 2.5rem;
}

.link-list {
  gap: 0.75rem;
}
</style>
