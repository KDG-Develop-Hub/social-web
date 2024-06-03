<script setup lang="ts">
import NavigationRail from "~/components/org/NavigationRail.vue";
</script>

<template>
  <div class="layout">
    <NavigationRail />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}
</style>
