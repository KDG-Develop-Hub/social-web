<script setup lang="ts">
  import { Dialog } from '@ark-ui/vue'
  import type { FunctionalComponent, VNode } from 'vue'

  defineProps<{
    icon?: FunctionalComponent
  }>()
  const slots = defineSlots<{
    default: () => VNode
    buttons?: () => VNode
  }>()
  const content = ref<HTMLElement | null>(null)
  const { width: contentWidth } = useElementSize(content)
  const {
    state: contentHeight,
    isReady,
    execute
  } = useAsyncState(
    async () => {
      return await nextTick(() => `${content.value?.clientHeight}px`)
    },
    '0px',
    { immediate: false }
  )
  const resize = () => execute()
  watchOnce(content, content => {
    if (content) {
      const observer = new ResizeObserver(resize)
      for (const el of content.children) {
        observer.observe(el)
      }
      onBeforeUnmount(() => observer.disconnect())
    }
  })
  watch(contentWidth, resize)
</script>

<template>
  <Teleport to="body">
    <Dialog.Backdrop class="overlay" />
    <Dialog.Positioner class="positioner">
      <Dialog.Content as-child :data-updated="isReady" class="content">
        <div ref="content">
          <div v-if="icon" class="v-stack icon-wrapper">
            <component :is="icon" class="icon" />
          </div>
          <slot name="default" />
          <div v-if="slots.buttons" class="h-stack button-set">
            <slot name="buttons" />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Positioner>
  </Teleport>
</template>

<style scoped>
  .overlay {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.36);
    transition: opacity var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);

    &[data-state='open'] {
      opacity: 1;
    }

    &[data-state='closed'] {
      opacity: 0;
    }
  }

  .positioner {
    position: fixed;
    z-index: 1;
    padding: 1rem;
    box-sizing: border-box;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .content {
    --dialog-height: v-bind(contentHeight);
    --dialog-padding: 1.5rem;
    display: flex;
    box-shadow: var(--md-sys-elevation-3);
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    padding: var(--dialog-padding) 0;
    gap: calc(var(--dialog-padding) - 0.5rem);
    box-sizing: border-box;
    width: 100%;
    max-width: 48rem;
    border-radius: var(--md-sys-shape-corner-lg);
    background: var(--md-sys-color-surface);
    transition:
      opacity var(--md-sys-motion-duration-short4)
        var(--md-sys-motion-easing-emphasized),
      height var(--md-sys-motion-duration-medium4)
        var(--md-sys-motion-easing-emphasized),
      translate var(--md-sys-motion-duration-medium4)
        var(--md-sys-motion-easing-emphasized);

    &[data-state='open'] {
      opacity: 1;
      translate: 0;
      height: var(--dialog-height);

      &[data-updated='false'] {
        height: auto;
      }
    }

    &[data-state='closed'] {
      translate: 0 calc(var(--dialog-height) * -1);
      opacity: 0;

      &[data-updated='true'] {
        height: 4rem;
      }

      :global(& > *) {
        transition: opacity var(--md-sys-motion-duration-short1)
          var(--md-sys-motion-easing-emphasized);
        opacity: 0;
      }
    }

    :deep(& > *) {
      transition: opacity var(--md-sys-motion-duration-short4)
        var(--md-sys-motion-easing-emphasized)
        var(--md-sys-motion-duration-short3);
      margin: 0 var(--dialog-padding);
      flex-shrink: 0;

      &:last-child {
        transition: opacity var(--md-sys-motion-duration-short4)
          var(--md-sys-motion-easing-emphasized);
        margin-top: 0.5rem;
      }
    }
  }

  .icon {
    color: var(--md-sys-color-primary);
    stroke: var(--md-sys-color-primary);
  }

  .button-set {
    justify-content: flex-end;
  }
</style>
