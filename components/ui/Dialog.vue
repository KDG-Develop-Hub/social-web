<script setup lang="ts">
import {DialogBackdrop, DialogContent, DialogPositioner} from "@ark-ui/vue";
import type {VNode} from "vue";

const slots = defineSlots<{
  default: () => VNode
  icon?: () => VNode
  buttons?: () => VNode
}>();
const content = ref<HTMLElement | null>(null);
const {state: contentHeight, isReady, execute} = useAsyncState(async () => {
  return await nextTick(() => `${content.value?.clientHeight}px`)
}, "0px", {immediate: false});
watch(content, (content) => {
  if (content) for (const el of content.querySelectorAll(".resize")) {
    new ResizeObserver(() => execute()).observe(el)
  }
  execute()
});
</script>

<template>
  <Teleport to="body">
    <DialogBackdrop class="overlay"/>
    <DialogPositioner class="positioner">
      <DialogContent as-child :data-updated="isReady" class="content">
        <div ref="content">
          <div v-if="slots.icon" class="v-stack icon">
            <slot name="icon"/>
          </div>
          <slot name="default"/>
          <div v-if="slots.buttons" class="h-stack button-set">
            <slot name="buttons"/>
          </div>
        </div>
      </DialogContent>
    </DialogPositioner>
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
  transition: opacity 200ms ease-out;

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
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.content {
  --dialog-height: v-bind(contentHeight);
  --dialog-padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  padding: var(--dialog-padding) 0;
  gap: calc(var(--dialog-padding) - 0.5rem);
  box-sizing: border-box;
  width: 100%;
  max-width: 48rem;
  border-radius: 1rem;
  background: var(--color-surface);

  &[data-state='open'] {
    opacity: 1;
    translate: 0;
    height: var(--dialog-height);

    &[data-updated=false] {
      height: auto;
    }

    transition: opacity 200ms ease-out, height 400ms cubic-bezier(0.14, 0.92, 0.34, 1), translate 400ms cubic-bezier(0.14, 0.92, 0.34, 1);
  }

  &[data-state='closed'] {
    translate: 0 calc(var(--dialog-height) * -1);
    opacity: 0;
    transition: opacity 200ms ease-out, height 1000ms cubic-bezier(0.14, 0.92, 0.34, 1), translate 1000ms cubic-bezier(0.14, 0.92, 0.34, 1);

    &[data-updated=true] {
      height: 4rem;
    }

    :global(& > *) {
      transition: opacity 50ms ease-out;
      opacity: 0;
    }
  }

  :global(& > *) {
    transition: opacity 200ms ease-out 150ms;
    margin: 0 var(--dialog-padding);
    flex-shrink: 0;

    &:global(&:last-child) {
      transition: opacity 200ms ease-out;
      margin-top: 0.5rem;
    }
  }
}

.icon {
  :global(*) {
    color: var(--color-error);
  }
}

.button-set {
  justify-content: flex-end;
}

</style>