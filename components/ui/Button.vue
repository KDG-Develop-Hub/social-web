<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      variant: "filled" | "text" | "outlined";
      as: string | object;
      width: "fit" | "full";
    }>
  >(),
  {
    variant: "filled",
    width: "fit",
    as: "button",
  },
);
</script>

<template>
  <component
    :is="as"
    :data-width="width"
    :data-variant="variant"
    class="container"
  >
    <slot name="icon" />
    <span :data-variant="variant" class="label-wrapper">
      <slot>ここを押してね</slot>
    </span>
  </component>
</template>

<style scoped>
.container {
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  border-radius: var(--radius-round);
  height: 2.5rem;
  background: var(--button-ctn-bgcolor-basic);

  &:hover {
    background: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 10%
    );
  }

  &:active {
    background: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 18%
    );
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-variant="filled"] {
    --button-ctn-bgcolor-basic: var(--color-primary);
    --button-ctn-bgcolor-to-mix: white;
  }

  &[data-variant="text"] {
    --button-ctn-bgcolor-basic: transparent;
    --button-ctn-bgcolor-to-mix: var(--color-primary);
  }

  &[data-width="fit"] {
    width: fit-content;
  }

  &[data-width="full"] {
    width: 100%;
  }

  &[data-variant="filled"]:disabled {
    background: var(--palette-neutral30);
  }

  &[data-variant="text"]:disabled {
    background: transparent;
  }

  &[data-variant="outlined"] {
    --button-ctn-bgcolor-basic: transparent;
    --button-ctn-bgcolor-to-mix: var(--color-primary);
    border: 1px solid var(--color-outline);
  }
}

.label-wrapper {
  padding: 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  pointer-events: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;

  &[data-variant="filled"] {
    color: white;
  }

  &[data-variant="text"] {
    color: black;
  }

  &[data-variant="outlined"] {
    color: var(--color-primary);
  }
}
</style>
