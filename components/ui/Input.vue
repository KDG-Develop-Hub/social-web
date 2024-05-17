<script setup lang="ts">
const props = defineProps<{
  type?: string
  id?: string
  fullWidth?: boolean
  hint?: string
}>()
const randomId = props.id ?? useId()
const hintId = `hint-${randomId}`
const model = defineModel<string>()
</script>

<template>
<div :class="fullWidth ? 'fullwidth' : null" class="wrapper h-stack ">
  <input autocomplete="off" :id="randomId" :aria-describedby="hintId" :type="type" v-model="model" :data-full="Boolean(model)"/>
  <span class="v-stack label-wrapper"><label :for="randomId">入力欄</label></span>
</div>
<p class="hint" v-if="hint" :id="hintId">{{ hint }}</p>
</template>

<style scoped>
.wrapper {
  margin: 0.5rem 0;
  --this-height: 3.5rem;
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
.label-wrapper {
  position: absolute;
  left: 1rem;
  padding: 0 0.25rem;
  background-color: var(--color-surface);
  transition: translate 200ms, font-size 200ms;
  translate: 0;
  * {
    transition: color 200ms;
  }
  :is(input[data-full=true], input:focus) ~ & {
    translate: -0.25rem calc(var(--this-height) / -2);
    font-size: 0.75rem;
  }
  input:focus ~ & > * {
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
  color: var(--color-on-surface);
  margin: 0.25rem 1rem;
}
</style>