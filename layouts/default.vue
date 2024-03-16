<script setup lang="ts">
import {Feather, History, Compass, User, Users, Settings2} from "lucide-vue-next";
</script>

<template>
  <div class="layout">
    <nav class="navigation-rail h-stack">
      <FloatingActionButton>
        <Feather color="white"/>
      </FloatingActionButton>
      <div class="h-stack block-list">
        <NuxtLink to="/" class="h-stack block">
          <span class="indicator v-stack">
            <History/>
          </span>
          アプデ
        </NuxtLink>
        <NuxtLink to="/browse" class="h-stack block">
          <span class="indicator v-stack">
            <Compass/>
          </span>
          見つける
        </NuxtLink>
        <NuxtLink :to="`/u/user`" class="h-stack block">
          <span class="indicator v-stack">
            <User />
          </span>
          君とは
        </NuxtLink>
        <NuxtLink to="/acquaintances" class="h-stack block">
          <span class="indicator v-stack">
            <Users />
          </span>
          知り合い
        </NuxtLink>
        <NuxtLink to="/setting" class="h-stack block">
          <span class="indicator v-stack">
            <Settings2 />
          </span>
          せってー
        </NuxtLink>
      </div>
    </nav>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

.main {
  width: 100%;
}

.navigation-rail {
  height: 100%;
  box-sizing: border-box;
  width: 5.5rem;
  padding: 2rem 0;
  --stack-gap: 2.5rem;
}

.block-list {
  --stack-gap: 0.75rem;
}

.block {
  font-size: 0.75rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  --stack-gap: 0.25rem;
}

.indicator {
  width: 3.5rem;
  justify-content: center;
  border-radius: var(--radius-round);
  height: 2rem;
}
</style>