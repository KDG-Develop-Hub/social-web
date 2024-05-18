<script setup lang="ts">
const props = defineProps<{
  type?: string
  id?: string
  fullWidth?: boolean
  hint?: string
  prefix?: string
  label: string
}>()
const randomId = props.id ?? useId()
const hintId = `hint-${randomId}`
const model = defineModel<string>()
const prefixRef = ref<HTMLSpanElement>()
const lengthToLeftEnd = computed(() => `${(prefixRef.value ? 16 - prefixRef.value.offsetWidth : 0) - 4}px`)
</script>

<template>
  <div class="wrapper" :data-full="Boolean(model)">
    <div :class="fullWidth ? 'fullwidth' : null" class="container h-stack">
      <span v-if="prefix" class="prefix" ref="prefixRef">{{ prefix }}</span>
      <div class="h-stack input-wrapper">
        <label class="h-stack label" :for="randomId">{{ label }}</label>
        <input autocomplete="off" :id="randomId" :aria-describedby="hintId" :type="type" v-model="model"/>
      </div>
    </div>
    <p class="hint" v-if="hint" :id="hintId">{{ hint }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0.5rem 0;
}
.container {
  --this-height: 3.5rem;
  gap: 0;
  position: relative;
  outline: var(--color-outline) solid 1px;
  height: var(--this-height);
  border-radius: 0.25rem;
  transition: outline-color 200ms, outline-width 50ms;
  &:hover {
    outline-color: var(--color-on-surface);
  }
  &:focus-within {
    outline-color: var(--color-primary);
    outline-width: 2px;
  }
  & > :first-child {
    padding-left: 1rem;
  }
  & > :last-child {
    padding-right: 1rem;
  }
}
.prefix {
  white-space: nowrap;
  user-select: none;
  padding-right: 0.5rem;
}
.label {
  user-select: none;
  position: absolute;
  white-space: nowrap;
  padding: 0 0.25rem;
  background-color: var(--color-surface);
  transition: translate 200ms, font-size 200ms, color 200ms;
  translate: 0;
  :is(.wrapper[data-full=true], .wrapper:focus-within) & {
    translate: v-bind(lengthToLeftEnd) calc(var(--this-height) / -2);
    font-size: 0.75rem;
  }
  .wrapper:focus-within & {
    color: var(--color-primary);
  }
}
.input-wrapper {
  width: 100%;
  height: 100%;
}
input {
  padding: 0;
  cursor: text;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  border: none;
  outline: none;
  background: transparent;
}
.hint {
  font-size: 0.75rem;
  color: var(--color-on-surface-variant);
  margin: 0.25rem 1rem;
}
</style>