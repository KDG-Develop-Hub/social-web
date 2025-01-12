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
    <Avatar.Image :src :alt="`${name}のプロフィールの写真`" />
    <Avatar.Fallback class="square fallback">{{
      initialName(name)
    }}</Avatar.Fallback>
  </Avatar.Root>
</template>

<style scoped>
  .square {
    &[data-size='sm'] {
      --square-size: 2rem;
      border-radius: var(--md-sys-shape-corner-sm);
    }

    &[data-size='md'] {
      --square-size: 3rem;
      border-radius: var(--md-sys-shape-corner-md);
    }

    &[data-size='lg'] {
      --square-size: 4rem;
      border-radius: var(--md-sys-shape-corner-lg);
    }
  }

  .root {
    flex-shrink: 0;
    display: inline-flex;
    overflow: hidden;
  }

  .fallback {
    display: grid;
    place-items: center;
    font-size: calc((var(--square-size) - 2rem) / 4 + 1rem);
    font-weight: 500;
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
    position: relative;
  }
</style>
