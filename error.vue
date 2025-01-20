<script setup lang="ts">
  import type { NuxtError } from '#app'

  defineProps<{
    error: NuxtError
  }>()
</script>

<template>
  <ErrorContent v-if="error.statusCode === 404">
    <template #title>ページが見つかりませんでした。</template>
    <template #description>
      与えられたURLに対応するページは存在しないか、削除されました...
    </template>
  </ErrorContent>
  <ErrorContent v-else>
    <template #title>問題が起きました。</template>
    <template #description>
      ページの読み込みに問題が発生しちゃった（；；）もう一度ロードしなおしてください。
    </template>
  </ErrorContent>
</template>
