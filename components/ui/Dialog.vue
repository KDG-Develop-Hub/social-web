<script setup lang="ts">
const content = ref<HTMLElement | null>(null);

</script>
<template>
  <DialogPortal>
    <DialogOverlay class="overlay" />
    <DialogContent ref="content" class="content">
      <slot/>
    </DialogContent>
  </DialogPortal>
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
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(100% - 2rem);
  max-width: 48rem;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background: var(--color-surface);

  &[data-state='open'] {
    animation:
        dialog-open 400ms cubic-bezier(0.14, 0.92, 0.34, 1),
        fade-in 50ms ease-out;
    :global(& > *) {
      animation: fade-in-delay 400ms ease-out;
    }
    :global(& > .button-set) {
      animation: fade-in 200ms ease-out;
    }
  }

  &[data-state='closed'] {
    animation:
        dialog-open 100ms cubic-bezier(0, 0.92, 0.34, 1) reverse,
        fade-in 400ms ease-out reverse;
  }

  :global(& > *) {
    margin: 0 var(--dialog-padding);
    &:global(&:last-child) {
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

@keyframes fade-in-delay {
  from {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialog-open {
  from {
    translate: 0 calc(var(--dialog-height) * -1);
    height: 4rem;
  }
  to {
    height: var(--dialog-height);
    translate: 0 0;
  }
}
</style>