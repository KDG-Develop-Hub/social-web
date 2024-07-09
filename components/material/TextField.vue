<script setup lang="ts">
const props = defineProps<{
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'tel'
    | 'number'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
  autocomplete?:
    | 'on'
    | 'off'
    | 'name'
    | 'honorific-prefix'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    | 'honorific-suffix'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'organization-title'
    | 'organization'
    | 'street-address'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level4'
    | 'address-level3'
    | 'address-level2'
    | 'address-level1'
    | 'country'
    | 'country-name'
    | 'postal-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-amount'
    | 'language'
    | 'bday'
    | 'bday-day'
    | 'bday-month'
    | 'bday-year'
  required?: boolean
  maxRows?: number | `${number}`
  id?: string
  fullWidth?: boolean
  hint?: string
  prefix?: string
  suffix?: string
  maxLength?: number | `${number}`
  minLength?: number | `${number}`
  label: string
  multiLine?: boolean
}>()
const id = props.id ?? useId()
const hintId = props.hint ? `hint-${id}` : undefined
const model = defineModel<string>()
const textareaRows = computed(() =>
  Math.min(model.value?.split('\n').length ?? 1, Number(props.maxRows) || 1)
)
const prefixRef = ref<HTMLSpanElement>()
const labelPadding = 4
const containerPadding = 16
const lengthToLeftEnd = computed(
  () => `${(prefixRef.value ? containerPadding - prefixRef.value.offsetWidth : 0) - labelPadding}px`
)
const clickHandler = () => {
  document.getElementById(id)?.focus()
}
</script>

<template>
  <div class="wrapper" :class="{ 'full-width': fullWidth }" :data-full="Boolean(model)">
    <div class="container h-stack" @click="clickHandler">
      <span v-if="prefix" ref="prefixRef" class="prefix">{{ prefix }}</span>
      <div class="h-stack input-wrapper full-width full-height">
        <span class="label-wrapper h-stack">
          <label class="h-stack label" :for="id">{{ label }}</label>
        </span>
        <textarea
          v-if="multiLine"
          :id="id"
          v-model="model"
          :required
          class="full-width input"
          :rows="textareaRows"
          :maxlength="maxLength"
          :minLength="minLength"
          :autocomplete="autocomplete"
          :aria-describedby="hintId"
        />
        <input
          v-else
          :id="id"
          v-model="model"
          class="full-width full-height input"
          :required
          :maxlength="maxLength"
          :minLength="minLength"
          :autocomplete="autocomplete"
          :aria-describedby="hintId"
          :type="type"
        >
        <span v-if="suffix" class="suffix">{{ suffix }}</span>
      </div>
    </div>
    <div class="supporting-text-wrapper">
      <p v-if="hint" :id="hintId" class="hint full-width">{{ hint }}</p>
      <span v-if="maxLength" class="counter full-width"
        >{{ model?.length ?? 0 }}/{{ maxLength }}</span
      >
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 0.5rem 2px;
  overflow: hidden;
}

.container {
  --this-height: 3.5rem;
  gap: 0;
  position: relative;
  outline: var(--color-outline) solid 1px;
  box-sizing: border-box;
  min-height: var(--this-height);
  border-radius: 0.25rem;
  padding: 1rem 0;
  transition:
    outline-color 200ms,
    outline-width 50ms;

  &:hover {
    outline-color: var(--color-on-surface);
  }

  &:focus-within {
    outline-color: var(--color-primary);
    outline-width: 2px;
  }

  & > :first-child {
    padding-left: calc(1px * v-bind(containerPadding));
  }

  & > :last-child {
    padding-right: calc(1px * v-bind(containerPadding));
  }
}

.prefix {
  white-space: nowrap;
  user-select: none;
  padding-right: 0.25rem;
}

.suffix {
  white-space: nowrap;
  user-select: none;
  color: var(--color-on-surface-variant);
}

.label-wrapper {
  position: absolute;
  height: var(--this-height);
  top: 0;
}

.label {
  user-select: none;
  white-space: nowrap;
  padding: 0 calc(1px * v-bind(labelPadding));
  background-color: var(--color-surface);
  transition:
    translate 200ms,
    font-size 200ms,
    color 200ms;
  translate: 0;

  :is(.wrapper[data-full='true'], .wrapper:focus-within) & {
    translate: v-bind(lengthToLeftEnd) calc(var(--this-height) / -2);
    font-size: 0.75rem;
  }

  .wrapper:focus-within & {
    color: var(--color-primary);
  }
}

.input-wrapper {
  gap: 0;
}

.input {
  padding: 0;
  height: min-content;
  cursor: text;
  font-size: 1rem;
  min-height: 1.5rem;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
}

.supporting-text-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0.25rem 1rem 0;
}

.hint,
.counter {
  font-size: 0.75rem;
  color: var(--color-on-surface-variant);
}

.counter {
  text-align: right;

  .hint + & {
    width: min-content;
  }
}
</style>
