<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      value?: number
      indeterminate?: boolean
    }>(),
    {
      value: 0,
      indeterminate: false
    }
  )
  const value = computed(() => (props.indeterminate ? 0 : props.value))
  const circumference = computed(() => 2 * Math.PI * value.value)
  const offset = computed(() => circumference.value - value.value)
</script>

<template>
  <span class="circular-progress-indicator__container">
    <svg
      class="circular-progress-indicator"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        v-if="!indeterminate"
        class="circular-progress-indicator__track"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="4"
        stroke-miterlimit="10"
      />
      <circle
        class="circular-progress-indicator__path"
        :class="{
          'circular-progress-indicator__path--indeterminate': indeterminate
        }"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        stroke-width="4"
        stroke-miterlimit="10"
      />
    </svg>
  </span>
</template>

<style>
  .circular-progress-indicator__container {
    display: inline-block;
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
  }
  .circular-progress-indicator {
    display: inline-block;
    vertical-align: middle;
  }

  .circular-progress-indicator__track {
    stroke: var(--md-sys-color-secondary-container);
  }

  .circular-progress-indicator__path {
    stroke: var(--md-sys-color-primary);
    stroke-linecap: round;
    transform-origin: center;
    &.circular-progress-indicator__path--indeterminate {
      animation:
        grow-and-shrink calc(var(--md-sys-motion-duration-xlong4) * 2)
          var(--md-sys-motion-easing-emphasized) infinite,
        rotate var(--md-sys-motion-duration-xlong4)
          var(--md-sys-motion-easing-linear) infinite;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }
  @keyframes grow-and-shrink {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0px;
    }
    50% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -15px;
    }
    100% {
      stroke-dasharray: 100, 200;
      stroke-dashoffset: -124px;
    }
  }
</style>
