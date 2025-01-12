<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
  const {
    execute,
    isLoading,
    state: mailIsSent
  } = useAsyncState(
    async () => {
      await sleep(1000)

      // TODO: ログイン用のメールを送信する。成功する場合はtrue, 失敗する場合はfalseを返す。
      return true
    },
    undefined,
    { immediate: false }
  )
</script>

<template>
  <AuthLoginForm
    v-if="!mailIsSent"
    :is-loading="isLoading"
    @submit.passive="execute()"
  />
  <AuthLoginMailSent v-else @reset="mailIsSent = false" />
</template>
