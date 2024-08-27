<script setup lang="ts">
  const event = useRequestEvent()
  if (event) setResponseStatus(event, 404, 'Page Not Found')
  const emoticons = [
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
    '\\(^o^)/'
  ]
  const { data } = await useAsyncData(async () => ({
    emoticon: emoticons[Math.floor(Math.random() * emoticons.length)]
  }))
</script>

<template>
  <div class="message">
    <span translate="no" class="display-lg">{{ data?.emoticon }}</span>
    <h1 class="display-md">ページが見つかりませんでした。</h1>
    <p class="body-md">
      与えられたURLに対応するページは存在しないか、削除されました...
    </p>
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
