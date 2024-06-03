<script setup lang="ts">
const { name } = useRoute().params;
const routePrefix = `/u/${name}`;
const currentUser = useCurrentUserStore();
const bio = "This is bio";
const tabItems = [
  { label: "つぶやき", value: routePrefix },
  { label: "返信", value: `${routePrefix}/replies` },
  { label: "メディア", value: `${routePrefix}/media` },
];
</script>

<template>
  <div class="profile">
    <header class="h-stack profile-header">
      <Avatar
        size="lg"
        :name="currentUser.name"
        src="https://avatars.githubusercontent.com/u/103516503?s=60&v="
      />
      <div class="names">
        <h1>{{ name }}</h1>
        <span>{{ name }}</span>
      </div>
      <Button v-if="name === currentUser.name" variant="outlined"
        >プローフィールをいじる</Button
      >
      <Button v-else>この人を知っておく</Button>
    </header>
    <p>{{ bio }}</p>
  </div>
  <TabsRoot :model-value="$route.fullPath">
    <TabsList class="tabs-list">
      <TabsIndicator class="tabs-indicator" />
      <TabsTrigger v-for="i in tabItems" as-child class="tab" :value="i.value">
        <NuxtLink :to="i.value">{{ i.label }}</NuxtLink>
      </TabsTrigger>
    </TabsList>
    <NuxtPage />
  </TabsRoot>
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
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-surface-variant);
}
.tabs-indicator {
  position: absolute;
  width: var(--radix-tabs-indicator-size);
  transition:
    translate 200ms ease,
    width 200ms ease;
  translate: var(--radix-tabs-indicator-position) 0;
  bottom: 0;
  height: 3px;
  border-top-left-radius: 99rem;
  border-top-right-radius: 99rem;
  background-color: var(--color-primary);
}
.tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-weight: 500;
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
