<script setup lang="ts">
import {DialogBackdrop, DialogContent, DialogPositioner} from "@ark-ui/vue";
const clientHeight = ref(0);
const contentHeight = computed(()=>`${clientHeight.value}px`);
const contentRef = ref();
const content = useCurrentElement<HTMLDivElement>(contentRef);
const {width} = useElementSize(contentRef);
const isUpdated = ref(false)
const resizeHeight = async () => {
  isUpdated.value = false;
  await nextTick(() => {
    clientHeight.value = content.value.clientHeight
  })
  isUpdated.value = true;
}
onMounted(resizeHeight)
watch(width, resizeHeight)
</script>

<template>
  <Teleport to="#dialog">
    <DialogBackdrop class="overlay"/>
    <DialogPositioner class="positioner">
      <DialogContent :data-updated="isUpdated" ref="contentRef" class="content">
        <slot/>
      </DialogContent>
    </DialogPositioner>
  </Teleport>
</template>

<style scoped>
.overlay {
  pointer-events: none;
  position: fixed;
  padding: 1rem;
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
    &:global(&:last-child) {
      transition: opacity 200ms ease-out;
      margin-top: 0.5rem;
    }
  }
}

</style>