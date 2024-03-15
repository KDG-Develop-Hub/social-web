<script setup lang="ts">
const props = withDefaults(
  defineProps<{ variant: "filled" | "text"; as: string | object, width: "fit" | "full" }>(),
  {
    variant: "filled",
    width: "fit",
    as: "button",
  }
);
</script>

<template>
  <component :is="as" :data-width="width" :data-variant="variant" class="container">
    <slot name="icon" />
    <span class="label-wrapper">
      <slot>ここを押してね</slot>
    </span>
  </component>
</template>

<style scoped>
.container {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border-radius: var(--radius-round);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  height: 2.5rem;
  background-color: var(--container-color);

  &:hover {
    background-color: color-mix(in srgb, var(--container-color), white 10%);
  }

  &:active {
    background-color: color-mix(in srgb, var(--container-color), white 15%);
  }

  &[data-variant="filled"] {
    --container-color: var(--green-6);
  }

  &[data-variant="text"] {
    --container-color: transparent;
  }

  &[data-width="fit"] {
    width: fit-content;
  }

  &[data-width="full"] {
    width: 100%;
  }
}

.label-wrapper {
  padding: 0 0.5rem;
}

</style>
