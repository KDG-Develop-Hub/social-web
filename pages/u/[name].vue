<script setup lang="ts">
const { name } = useRoute().params;
const routePrefix = `/u/${name}`;
const currentUser = useCurrentUserStore();
const bio = "This is bio";
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
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="routePrefix">
          <NuxtLink :to="routePrefix">つぶやき</NuxtLink>
        </TabsTrigger>
      </label>
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="`${routePrefix}/replies`">
          <NuxtLink :to="`${routePrefix}/replies`">返信</NuxtLink>
        </TabsTrigger>
      </label>
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="`${routePrefix}/media`">
          <NuxtLink :to="`${routePrefix}/media`">メディア</NuxtLink>
        </TabsTrigger>
      </label>
    </TabsList>
  </TabsRoot>
  <NuxtPage />
</template>

<style>
.profile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
}
.tabs-list {
  width: 100%;
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--pallete-color-neutral80);
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
  background-color: var(--pallete-color-primary50);
}
.tab-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  font-weight: 500;
  text-decoration: none;
  color: black;
  height: 2.75rem;
  padding: 0 1rem;
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
