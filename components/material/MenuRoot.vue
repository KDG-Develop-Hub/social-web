<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'
  defineEmits<{
    (e: 'select', arg: string): void
  }>()
  const id = useId()
</script>

<template>
  <Menu.Root :id @select="$emit('select', $event.value)">
    <slot />
  </Menu.Root>
</template>
