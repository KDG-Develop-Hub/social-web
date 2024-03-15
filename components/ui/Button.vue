<script setup lang="ts">
import { css, cva } from "styled-system/css";

const props = withDefaults(
  defineProps<{variant: "filled" | "text" }>(),
  {
    variant: "filled",
  }
);
const recipe = cva({
  variants: {
    variant: {
      filled: {
        bgColor: "green.600",
        color: "white",
      },
      text: {
        bgColor: "transparent",
        color: "black",
      },
    },
  },
});
</script>

<template>
  <button
    :class="
      clsx(
        css({
          fontSize: 'sm',
          height: '2.5rem',
          paddingX: '4',
          border: 'none',
          borderRadius: '99rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500',
          cursor: 'pointer',
          _hover: {
          },
        }),
        recipe(props)
      )
    "
  >
    <slot name="icon" />
    <span
      :class="
        css({
          px: '2',
        })
      "
    >
      <slot>ここを押してね</slot>
    </span>
  </button>
</template>
