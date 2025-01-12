<script lang="ts" setup>
  definePageMeta({
    layout: 'empty'
  })
</script>

<template>
  <div class="auth-content-positioner">
    <MaterialCard variant="elevated" class="auth-content">
      <img class="logo" src="/logo.svg" alt="kdg.socialのロゴ" />
      <NuxtPage />
    </MaterialCard>
  </div>
</template>

<style scoped>
  .logo {
    height: 48px;
    margin-bottom: 1rem;
    width: fit-content;
  }
  .auth-content-positioner {
    display: grid;
    place-items: center;
    height: 100vh;
  }
  .auth-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 100%;
    max-width: 32rem;
  }
</style>
