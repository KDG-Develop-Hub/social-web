<script setup lang="ts">
const navItems = [
  { to: "", text: "アカウント" },
  { to: "/profile", text: "プロフィール" },
  { to: "/appearance", text: "見た目" },
];
</script>

<template>
  <nav>
    <ul class="nav">
      <li v-for="item in navItems">
        <NuxtLink class="nav-item h-stack" :to="`/settings${item.to}`">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  padding: 0;
  list-style-type: none;
  width: 12rem;
}
.nav-item {
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 99rem;
  text-decoration: none;
  font-weight: 500;
  &.router-link-active {
    background-color: var(--color-secondary-container);
    color: var(--color-on-secondary-container);
  }
}
</style>