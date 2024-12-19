<script setup lang="ts">
  import { Tabs } from '@ark-ui/vue'

  const route = useRoute()
  const direction = ref<string | null>(null)
  const { name } = route.params
  const routePrefix = computed(() => `/u/${name}`)
  const currentUser = useCurrentUserStore()
  const bio = 'This is bio'
  const tabItems = [
    { label: 'つぶやき', value: routePrefix.value },
    { label: '返信', value: `${routePrefix.value}/replies` },
    { label: 'メディア', value: `${routePrefix.value}/media` }
  ]
  onBeforeRouteUpdate(e => {
    direction.value =
      tabItems.findIndex(i => i.value === route.fullPath) <
      tabItems.findIndex(i => i.value === e.fullPath)
        ? 'ltr'
        : 'rtl'
  })
</script>

<template>
  <div class="body">
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
        <MaterialButton v-if="name === currentUser.name" variant="outlined">
          プローフィールをいじる
        </MaterialButton>
        <MaterialButton v-else>この人を知っておく</MaterialButton>
      </header>
      <p>{{ bio }}</p>
    </div>
    <Tabs.Root
      id="user-profile-tabs"
      class="tabs-root"
      :default-value="$route.fullPath"
    >
      <Tabs.List class="tabs-list">
        <Tabs.Trigger
          v-for="i in tabItems"
          :key="i.value"
          v-ripple="{ color: 'var(--md-sys-color-on-surface)' }"
          as-child
          class="tab title-sm"
          :value="i.value"
        >
          <NuxtLink :to="i.value">{{ i.label }}</NuxtLink>
        </Tabs.Trigger>
        <Tabs.Indicator class="tabs-indicator" />
      </Tabs.List>
      <div class="tabs-content-wrapper">
        <Transition mode="out-in">
          <div
            :key="$route.fullPath"
            :data-direction="direction"
            class="tabs-content"
          >
            <NuxtPage />
          </div>
        </Transition>
      </div>
    </Tabs.Root>
  </div>
</template>

<style scoped>
  .body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
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
  .tabs-root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .tabs-content-wrapper {
    position: relative;
    flex-grow: 1;
    position: relative;
    &:has(> .v-enter-active),
    &:has(> .v-leave-active) {
      overflow: visible;
    }
  }
  .tabs-content {
    min-width: 100%;
    min-height: 100%;
    --tab-content-direction: 1;
    &[data-direction='ltr'] {
      --tab-content-direction: -1;
    }
    &.v-enter-active,
    &.v-leave-active {
      transition: all var(--md-sys-motion-duration-medium2)
        var(--md-sys-motion-easing-standard);
    }
    &.v-enter-from {
      position: absolute;
      opacity: 0;
      transform: translateX(calc(2rem * var(--tab-content-direction)));
    }
    &.v-leave-to {
      position: absolute;
      opacity: 0;
      transform: translateX(calc(-2rem * var(--tab-content-direction)));
    }
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
