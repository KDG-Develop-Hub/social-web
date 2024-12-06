<script lang="tsx" setup></script>

<template>
  <header class="top-app-bar__container">
    <div v-if="$slots.leadingIcon || $slots.trailingIcon" class="h-stack">
      <slot name="leading-icon" />
      <div v-if="$slots.trailingIcon" class="top-app-bar__trailing-icons">
        <slot name="trailing-icon" />
      </div>
    </div>
    <h2 class="headline-sm">
      <slot />
    </h2>
  </header>
</template>

<style scoped>
  .top-app-bar__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    height: 7.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.5rem;
  }
  .top-app-bar__trailing-icons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }
</style>
