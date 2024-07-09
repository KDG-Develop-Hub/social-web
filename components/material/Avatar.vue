<script setup lang="ts">
import { Avatar } from '@ark-ui/vue'

withDefaults(
  defineProps<{
    name: string
    src: string
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    size: 'md'
  }
)
const id = useId()
</script>

<template>
  <Avatar.Root :id="id" :data-size="size" class="square root">
    <Avatar.Image
      src="https://avatars.githubusercontent.com/u/103516503?s=60&v=4"
      :alt="`${name}のプロフィールの写真`"
    />
    <Avatar.Fallback class="square fallback">{{ initialName(name) }}</Avatar.Fallback>
  </Avatar.Root>
</template>

<style scoped>
.square {
  &[data-size='sm'] {
    --square-size: 2rem;
  }

  &[data-size='md'] {
    --square-size: 3rem;
  }

  &[data-size='lg'] {
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
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  position: relative;
}
</style>
