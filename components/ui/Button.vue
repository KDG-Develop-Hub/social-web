<script setup lang="ts">
import { css } from "styled-system/css";
</script>

<template>
  <button
    :class="
      css({
        border: 'none',
        borderRadius: '99rem',
        fontSize: '0.875rem',
        fontWeight: 500,
        height: '2.5rem',
        padding: '0 1rem',
        bgColor: 'blue.800',
        color: 'white',
      })
    "
  >
    <slot>Click me</slot>
  </button>
</template>
