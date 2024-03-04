<script setup lang="ts">
import {css, cva} from "styled-system/css";

const props = withDefaults(defineProps<{ size?: "sm" | "md" | "lg" }>(), {
  size: "md",
});
const sizes = cva({
  variants: {
    size: {
      sm: {
        fontSize: "0.75rem",
        height: "1.75rem",
        paddingX: "0.75rem",
      },
      md: {
        fontSize: "0.875rem",
        height: "2.5rem",
        paddingX: "4",
      },
      lg: {
        fontSize: "1rem",
        height: "3rem",
        paddingX: "1.25rem",
      },
    }
  }
});
</script>

<template>
  <button
      :class="clsx(
      css({
        border: 'none',
        borderRadius: '99rem',
        fontWeight: '500',
        bgColor: 'blue.900',
        color: 'white',
      }), sizes(props)
      )"
  >
    <slot>Click me</slot>
  </button>
</template>
