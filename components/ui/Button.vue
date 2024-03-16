<script setup lang="ts">
withDefaults(
  defineProps<
    Partial<{
      variant: "filled" | "text";
      as: string | object;
      width: "fit" | "full";
    }>
  >(),
  {
    variant: "filled",
    width: "fit",
    as: "button",
  }
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
  cursor: var(--button-ctn-cursor);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: var(--radius-round);
  height: 2.5rem;
  background-color: var(--button-ctn-bgcolor);
  width: var(--button-ctn-width);

  &[data-variant="filled"] {
    --button-ctn-bgcolor-basic: var(--green-7);
    --button-ctn-bgcolor-to-mix: white;
  }

  &:enabled {
    --button-ctn-bgcolor: var(--button-ctn-bgcolor-basic);
    --button-ctn-cursor: pointer;
  }

  &:disabled {
    --button-ctn-cursor: not-allowed;
  }

  &:enabled:hover {
    --button-ctn-bgcolor: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 10%
    );
  }

  &:enabled:active {
    --button-ctn-bgcolor: color-mix(
      in srgb,
      var(--button-ctn-bgcolor-basic),
      var(--button-ctn-bgcolor-to-mix) 18%
    );
  }

  &[data-variant="text"] {
    --button-ctn-bgcolor-basic: transparent;
    --button-ctn-bgcolor-to-mix: var(--green-7);
  }

  &[data-width="fit"] {
    --button-ctn-width: fit-content;
  }

  &[data-width="full"] {
    --button-ctn-width: 100%;
  }
}

.label-wrapper {
  padding: 0 0.5rem;
  color: var(--button-lb-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  pointer-events: none;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;

  &[data-variant="filled"] {
    --button-lb-color: white;
  }

  &[data-variant="text"] {
    --button-lb-color: black;
  }
}
</style>
