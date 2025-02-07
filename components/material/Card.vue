<script setup lang="ts">
  defineEmits(['click'])
  const props = withDefaults(
    defineProps<{
      variant?: 'elevated' | 'filled' | 'outlined'
      clickable?: boolean
      to?: string
    }>(),
    {
      variant: 'filled',
      clickable: false,
      to: undefined
    }
  )
  const variantClasses = computed(() => {
    return {
      'card-elevated': props.variant === 'elevated',
      'card-filled': props.variant === 'filled',
      'card-outlined': props.variant === 'outlined'
    }
  })
</script>

<template>
  <NuxtLink
    v-if="to"
    v-ripple
    :to="to"
    v-bind="$attrs"
    :class="variantClasses"
    @click="$emit('click')"
  >
    <slot />
  </NuxtLink>
  <button
    v-else-if="clickable"
    v-ripple
    v-bind="$attrs"
    type="button"
    :class="variantClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
  <div v-else v-bind="$attrs" :class="variantClasses">
    <slot />
  </div>
</template>

<style scoped>
  .card-elevated {
    background-color: var(--md-sys-color-surface-container-low);
    border-radius: var(--md-sys-shape-corner-lg);
    box-shadow: var(--md-sys-elevation-2);
  }
  .card-filled {
    background-color: var(--md-sys-color-surface);
  }
  .card-outlined {
    border: 1px solid var(--md-sys-color-outline);
    border-radius: var(--md-sys-shape-corner-lg);
  }
</style>
