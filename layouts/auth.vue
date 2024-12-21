<template>
  <div class="card-positioner">
    <div class="card">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .card-positioner {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .card {
    background-color: var(--md-sys-color-surface-container);
    border-radius: var(--md-sys-shape-corner-lg);
    padding: 1.5rem;
    box-shadow: var(--md-sys-elevation-2);
  }
</style>
