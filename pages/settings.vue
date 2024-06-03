<script setup lang="ts">
const navItems = [
  { to: '', text: 'アカウント' },
  { to: '/profile', text: 'プロフィール' },
  { to: '/appearance', text: '見た目' }
]
</script>

<template>
  <div class="row">
    <nav>
      <ul class="nav">
        <li v-for="item in navItems" class="h-stack">
          <NuxtLink class="nav-item h-stack" :to="`/settings${item.to}`">{{ item.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="page">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  gap: 2rem;
}
.page {
  width: 100%;
}
.nav {
  padding: 0;
  list-style-type: none;
  width: 14rem;
}
.nav-item {
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 99rem;
  text-decoration: none;
  font-weight: 500;
  &.router-link-exact-active {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
  }
}
</style>
