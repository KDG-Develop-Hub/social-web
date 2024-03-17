<script setup lang="ts">
import NavigationRail from "~/components/org/NavigationRail.vue";
</script>

<template>
  <div class="layout">
    <NavigationRail/>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.main {
  width: 100%;
  padding: 2rem;
}

</style>