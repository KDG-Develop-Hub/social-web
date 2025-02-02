<script lang="ts" setup>
  const EMOTICONS = [
    '(T_T)',
    '_(:3」∠)_',
    '(-_-)',
    ':-(',
    ':-D',
    ':-P',
    ':-O',
    ':-|',
    ':-/',
    'uwu',
    '\\(^o^)/',
    '( ́・ω・`)'
  ] as const
  const { data } = await useAsyncData(async () => ({
    emoticon: EMOTICONS[Math.floor(Math.random() * EMOTICONS.length)]
  }))
</script>

<template>
  <div class="message">
    <span translate="no" class="display-lg">{{ data?.emoticon }}</span>
    <h1 class="display-md">
      <slot name="title">ページが見つかりませんでした。</slot>
    </h1>
    <p class="body-md">
      <slot name="description"
        >与えられたURLに対応するページは存在しないか、削除されました...</slot
      >
    </p>
    <slot />
  </div>
</template>

<style scoped>
  .message {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    padding: 1rem;
  }
</style>
