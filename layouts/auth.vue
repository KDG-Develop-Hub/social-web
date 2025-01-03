<template>
  <div class="card-positioner">
    <div class="card">
      <img class="logo" src="/logo.svg" alt="logo" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .logo {
    height: 48px;
    width: fit-content;
    margin-bottom: 1rem;
  }
  .card-positioner {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .card {
    width: 100%;
    max-width: 640px;
    min-height: 384px;
    display: flex;
    flex-direction: column;
    background-color: var(--md-sys-color-surface-container);
    border-radius: var(--md-sys-shape-corner-lg);
    padding: 1.5rem;
    box-shadow: var(--md-sys-elevation-2);
  }
</style>
