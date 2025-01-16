<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      maxRows?: number | `${number}`
      minRows?: number | `${number}`
    }>(),
    {
      maxRows: 5,
      minRows: 1
    }
  )
  const model = defineModel<string>()

  const maxRows = computed(() => Number(props.maxRows))
  const minRows = computed(() => Number(props.minRows))
  const textareaRows = computed(() =>
    Math.min(
      model.value?.split('\n').length ?? minRows.value,
      maxRows.value || minRows.value
    )
  )
</script>

<template>
  <textarea
    v-model="model"
    :rows="textareaRows"
    v-bind="$attrs"
    :data-multiline="textareaRows > 1"
    class="auto-resizing-textarea"
  />
</template>

<style scoped>
  .auto-resizing-textarea {
    resize: none;
  }
</style>
