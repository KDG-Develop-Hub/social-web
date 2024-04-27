<script setup lang="ts">
import {Compass, Feather, History, Settings2, User, Users} from "lucide-vue-next";

const currentUser = useCurrentUserStore()
const linkContents = ref([
  {to: "/", icon: History, text: "アプデ"},
  {to: "/browse", icon: Compass, text: "見つける"},
  {to: `/u/${currentUser.name}`, icon: User, text: "君とは"},
  {to: "/friends", icon: Users, text: "知り合い"},
  {to: "/settings", icon: Settings2, text: "せってー"}
])
</script>

<template>
  <nav class="navigation-rail v-stack">
    <FloatingActionButton>
      <Feather color="white"/>
    </FloatingActionButton>
    <div class="v-stack link-list">
      <NuxtLink v-for="linkContent in linkContents" :to="linkContent.to" class="v-stack link">
        <span class="indicator h-stack">
          <component :is="linkContent.icon" class="link-icon" strokeWidth="var(--navr-link-icon-width)"/>
        </span>
        {{ linkContent.text }}
      </NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.navigation-rail {
  height: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 5.5rem;
  padding: 2rem 0;
  gap: 2.5rem;
}

.link-list {
  gap: 0.75rem;
}

.link {
  font-size: 0.75rem;
  font-weight: 500;
  color: black;
  text-decoration: none;
  gap: 0.25rem;
  --navr-link-icon-width: 2;

  &:is(:hover, .router-link-active) {
    font-weight: 600;
    --navr-link-icon-width: 2.25;
  }
}

.link-icon {
  transition: stroke-width 200ms ease;
}

.indicator {
  position: relative;
  width: 3.5rem;
  justify-content: center;
  border-radius: var(--radius-round);
  height: 2rem;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    width: 0;
    height: 100%;
    transition: all 200ms ease;
    opacity: 0;
    border-radius: var(--radius-round);
    background-color: var(--palette-primary80);
  }
}

.link:hover .indicator {
  background-color: color-mix(in srgb, var(--palette-neutral60), transparent 80%);
}

.link:active .indicator {
  background-color: color-mix(in srgb, var(--palette-neutral60), transparent 72%);
}

.link.router-link-active .indicator::before {
  opacity: 1;
  width: 100%;
}
</style>