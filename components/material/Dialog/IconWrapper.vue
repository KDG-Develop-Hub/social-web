<template>
  <div class="v-stack icon">
    <slot />
  </div>
</template>

<style scoped>
.icon :deep(*) {
  color: var(--color-secondary);
}
</style>
