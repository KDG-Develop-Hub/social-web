<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'
  const contentRef = useTemplateRef('content')
  const size = useElementSize(
    contentRef,
    { width: 0, height: 0 },
    {
      box: 'border-box'
    }
  )
  const height = computed(() => `${size.height.value}px`)
</script>

<template>
  <Menu.Positioner :style="{ height }" class="positioner">
    <Menu.Content class="container">
      <div ref="content" class="content-wrapper">
        <slot />
      </div>
    </Menu.Content>
  </Menu.Positioner>
</template>

<style scoped>
  .positioner {
    display: flex;
    flex-direction: column;

    &:has(div[data-placement*='bottom']) {
      justify-content: flex-start;
    }
    &:has(div[data-placement*='top']) {
      justify-content: flex-end;
    }
  }
  .content-wrapper {
    position: relative;
    padding: 0.5rem 0;
  }
  .container {
    z-index: var(--layer-index);
    overflow: hidden;
    box-shadow: var(--md-sys-elevation-2);
    border-radius: var(--md-sys-shape-corner-xs);
    background-color: var(--md-sys-color-surface-container);
    outline: none;
    min-width: 7rem;
    max-width: 17.5rem;
    opacity: 1;
    animation: fade-in var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);
    &[data-state='closed'] {
      animation: fade-out var(--md-sys-motion-duration-short2)
        var(--md-sys-motion-easing-emphasized);
    }
  }

  @keyframes fade-in {
    from {
      height: 0;
    }
    to {
      height: v-bind(height);
    }
  }

  @keyframes fade-out {
    from {
      height: v-bind(height);
    }
    to {
      height: 0;
    }
  }
</style>
