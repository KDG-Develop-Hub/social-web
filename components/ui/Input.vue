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
</script>

<template>
  <div class="wrapper">
    <div :class="fullWidth ? 'fullwidth' : null" class="input-wrapper h-stack ">
      <input autocomplete="off" :id="randomId" :aria-describedby="hintId" :type="type" v-model="model"
             :data-full="Boolean(model)"/>
      <label class="h-stack label" :for="randomId">{{ label }}</label>
    </div>
    <p class="hint" v-if="hint" :id="hintId">{{ hint }}</p>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0.5rem 0;
}
.input-wrapper {
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
}
.label {
  position: absolute;
  left: 1rem;
  padding: 0 0.25rem;
  background-color: var(--color-surface);
  transition: translate 200ms, font-size 200ms, color 200ms;
  translate: 0;
  :is(input[data-full=true], input:focus) ~ & {
    translate: -0.25rem calc(var(--this-height) / -2);
    font-size: 0.75rem;
  }
  input:focus ~ & {
    color: var(--color-primary);
  }
}
input {
  cursor: text;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
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