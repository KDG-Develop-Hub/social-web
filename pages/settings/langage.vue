<script setup lang="ts">
  import { RadioGroup } from '@ark-ui/vue'
  import { ref } from 'vue'

  const frameworks = ref(['日本語', '英語'])
</script>

<template>
  <div>
    <h2>言語</h2>
    <RadioGroup.Root class="langage">
      <RadioGroup.Indicator />
      <RadioGroup.Item
        v-for="framework in frameworks"
        :key="framework"
        :value="framework"
        class="langage-select"
      >
        <RadioGroup.ItemHiddenInput name="langage" />
        <RadioGroup.ItemText>{{ framework }}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 1rem;
  }

  .langage {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .langage-select {
    display: flex;
    align-items: center;
    user-select: none;
    gap: 1rem;
  }

  .langage-select input {
    appearance: none !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    width: 1rem !important;
    height: 1rem !important;
    border: 1px solid var(--md-sys-color-outline) !important;
    border-radius: 50% !important;
    outline: none !important;
    cursor: pointer !important;
    position: relative !important;
  }

  .langage-select input:checked::before {
    content: '' !important;
    display: block !important;
    width: 0.5rem !important;
    height: 0.5rem !important;
    background-color: var(--md-sys-color-primary) !important;
    border-radius: 50% !important;
    position: absolute !important;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }

  .langage-select input:checked {
    border: 1px solid var(--md-sys-color-primary) !important;
  }
</style>
