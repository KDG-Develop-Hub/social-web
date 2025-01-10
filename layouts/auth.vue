<template>
  <div class="card-positioner">
    <MaterialCard variant="elevated" class="card-content">
      <img class="logo" src="/logo.svg" alt="logo" />
      <slot></slot>
    </MaterialCard>
  </div>
</template>

<style scoped>
  .logo {
    height: 48px;
    width: fit-content;
  }
  .card-positioner {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .card-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    max-width: 32rem;
  }
</style>
