<script setup lang="ts">
const { name } = useRoute().params
const routePrefix = `/u/${name}`
const currentUser = useCurrentUserStore()
</script>

<template>
  <div class="profile">
    <header class="v-stack profile-header">
      <AvatarRoot class="square avatar">
        <AvatarImage src="https://avatars.githubusercontent.com/u/103516503?s=60&v=4" :alt="`${currentUser.name}のプロフィールの写真`" />
        <AvatarFallback class="square avatar-fallback">{{ currentUser.name[0] }}</AvatarFallback>
      </AvatarRoot>
      <div class="names">
        <h1>{{ "hi" }}</h1>
        <span>{{ name }}</span>
      </div>
      <Button v-if="name === currentUser.name" variant="outlined">プローフィールをいじる</Button>
      <Button v-else>この人を知っておく</Button>
    </header>
    <p>{{ "This is bio" }}</p>
  </div>
  <TabsRoot :model-value="$route.fullPath">
    <TabsList class="tabs-list">
      <TabsIndicator class="tabs-indicator" />
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="routePrefix">
          <NuxtLink :to="routePrefix" >つぶやき</NuxtLink>
        </TabsTrigger>
      </label>
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="`${routePrefix}/replies`">
          <NuxtLink :to="`${routePrefix}/replies`">返信</NuxtLink>
        </TabsTrigger>
      </label>
      <label class="tab-wrapper">
        <TabsTrigger as-child class="tab" :value="`${routePrefix}/friends`">
          <NuxtLink :to="`${routePrefix}/friends`">友達</NuxtLink>
        </TabsTrigger>
      </label>
    </TabsList>
  </TabsRoot>
  <NuxtPage />
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
}
.avatar {
  --square-size: 4rem;
  flex-shrink: 0;
  display: inline-flex;
  border-radius: 1rem;
  overflow: hidden;
}
.avatar-fallback {
  --square-size: 4rem;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  background-color: var(--pallete-color-neutral70);
  position: relative;
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
  transition: translate 200ms ease, width 200ms ease;
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