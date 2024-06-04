<script setup lang="ts">
import { Compass, Feather, History, Settings2, User, Users } from 'lucide-vue-next'

const currentUser = useCurrentUserStore()
const linkContents = ref([
  { to: '/', icon: History, text: 'アプデ' },
  { to: '/browse', icon: Compass, text: '見つける' },
  { to: `/u/${currentUser.name}`, icon: User, text: '君とは' },
  { to: '/friends', icon: Users, text: '知り合い' },
  { to: '/settings', icon: Settings2, text: 'せってー' }
])
</script>

<template>
  <div class="layout">
    <MaterialNavigationRail>
      <template #fab>
        <MaterialFAB>
          <Feather />
        </MaterialFAB>
      </template>
      <template #link-list>
        <MaterialNavigationRailLink
          v-for="linkContent in linkContents"
          :key="linkContent.to"
          :to="linkContent.to"
          :label="linkContent.text"
          :icon="linkContent.icon"
        />
      </template>
    </MaterialNavigationRail>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}
</style>
