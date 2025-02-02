<script setup lang="ts">
  import ErrorContent from '~/components/error/ErrorContent.vue'

  const event = useRequestEvent()
  if (event) setResponseStatus(event, 404, 'Page Not Found')
</script>

<template>
  <ErrorContent>
    <template #title>ページが見つかりませんでした。</template>
    <template #description
      >与えられたURLに対応するページは存在しないか、削除されました...</template
    >
  </ErrorContent>
</template>
