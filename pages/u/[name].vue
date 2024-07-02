<script setup lang="ts">
  import { Tabs } from '@ark-ui/vue'

  const { name } = useRoute().params
  const routePrefix = `/u/${name}`
  const currentUser = useCurrentUserStore()
  const bio = 'This is bio'
  const tabItems = [
    { label: 'つぶやき', value: routePrefix },
    { label: '返信', value: `${routePrefix}/replies` },
    { label: 'メディア', value: `${routePrefix}/media` }
  ]
</script>

<template>
  <div class="profile">
    <header class="h-stack profile-header">
      <MaterialAvatar
        size="lg"
        :name="currentUser.name"
        src="https://avatars.githubusercontent.com/u/103516503?s=60&v="
      />
      <div class="names">
        <h1>{{ name }}</h1>
        <span>{{ name }}</span>
      </div>
      <MaterialButton v-if="name === currentUser.name" variant="outlined"
        >プローフィールをいじる</MaterialButton
      >
      <MaterialButton v-else>この人を知っておく</MaterialButton>
    </header>
    <p>{{ bio }}</p>
  </div>
  <Tabs.Root id="user-profile-tabs" :default-value="$route.fullPath">
    <Tabs.List class="tabs-list">
      <Tabs.Trigger
        v-for="i in tabItems"
        :key="i.value"
        as-child
        class="tab title-sm"
        :value="i.value"
      >
        <NuxtLink :to="i.value">{{ i.label }}</NuxtLink>
      </Tabs.Trigger>
      <Tabs.Indicator class="tabs-indicator" />
    </Tabs.List>
    <NuxtPage />
  </Tabs.Root>
</template>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
  }
  .tabs-list {
    width: 100%;
    display: flex;
    position: sticky;
    top: 0;
    gap: 1rem;
    background-color: var(--md-sys-color-surface);
    border-bottom: 1px solid var(--md-sys-color-surface-variant);
  }
  .tabs-indicator {
    position: absolute;
    width: var(--width);
    transition:
      left var(--md-sys-motion-duration-medium4)
        var(--md-sys-motion-easing-emphasized),
      width var(--md-sys-motion-duration-medium4)
        var(--md-sys-motion-easing-emphasized);
    left: var(--left);
    bottom: 0;
    height: 3px;
    border-top-left-radius: 99rem;
    border-top-right-radius: 99rem;
    background-color: var(--md-sys-color-primary);
  }
  .tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    text-decoration: none;
    height: 3rem;
    padding: 0 0.5rem;
  }
  .profile-header {
    gap: 1.5rem;
  }
  .names {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
