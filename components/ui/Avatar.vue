<script setup lang="ts">
import {initialName} from "~/composables/formatter";

withDefaults(defineProps<{
      name: string,
      src: string,
      size?: "sm" | "md" | "lg"
    }>()
    , {
      size: "md"
    }
)
</script>

<template>
  <AvatarRoot :data-size="size" class="square root">
    <AvatarImage src="https://avatars.githubusercontent.com/u/103516503?s=60&v=4" :alt="`${name}のプロフィールの写真`"/>
    <AvatarFallback class="square fallback">{{ initialName(name) }}</AvatarFallback>
  </AvatarRoot>
</template>

<style scoped>
.square {
  &[data-size=sm] {
    --square-size: 2rem;
  }

  &[data-size=md] {
    --square-size: 3rem;
  }

  &[data-size=lg] {
    --square-size: 4rem;
  }
}

.root {
  flex-shrink: 0;
  display: inline-flex;
  border-radius: calc(var(--square-size) / 4);
  overflow: hidden;
}

.fallback {
  display: grid;
  place-items: center;
  font-size: calc((var(--square-size) - 2rem) / 4 + 1rem);
  font-weight: 500;
  background-color: var(--palette-neutral70);
  position: relative;
}

</style>