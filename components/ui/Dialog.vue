<script setup lang="ts">
import {DialogBackdrop, DialogContent, DialogPositioner} from "@ark-ui/vue";
</script>
<template>
  <DialogBackdrop class="overlay" />
  <DialogPositioner class="positioner" >
    <DialogContent class="content">
      <slot/>
    </DialogContent>
  </DialogPositioner>
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

  &[data-state='open'] {
    animation: fade-in 200ms ease-out;
  }

  &[data-state='closed'] {
    animation: fade-in 200ms ease-out;
  }
}

.positioner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.content {
  --dialog-height: 186px;
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
    transition: opacity 200ms ease-out, height 400ms cubic-bezier(0.14, 0.92, 0.34, 1), translate 400ms cubic-bezier(0.14, 0.92, 0.34, 1);
  }

  &[data-state='closed'] {
    translate: 0 calc(var(--dialog-height) * -1);
    opacity: 0;
    height: 4rem;
    transition: opacity 200ms ease-out, height 1000ms cubic-bezier(0.14, 0.92, 0.34, 1), translate 1000ms cubic-bezier(0.14, 0.92, 0.34, 1);
    &[data-aa=true] {
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

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>