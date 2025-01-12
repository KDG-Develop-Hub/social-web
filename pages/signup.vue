<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
  const route = useRoute()
  const token = computed(() => route.query.token as string)
  const tokenIsValid = computed(() => {
    if (token.value === null ? undefined : token.value === undefined)
      return null
    return token.value.length === 32
  })
  const {
    execute,
    state: mailIsSent,
    isLoading
  } = useAsyncState(
    async () => {
      await sleep(1000)


      // TODO: ログイン用のメールを送信する。成功する場合はtrue, 失敗する場合はfalseを返す。
      return true
    },
    false,
    { immediate: false }
  )
  const reset = () => {
    mailIsSent.value = false
  }
</script>

<template>
  <AuthSignUpEmailSent v-if="mailIsSent" @reset.passive="reset()" />
  <AuthSignUpForm
    v-else-if="tokenIsValid"
    :is-loading
    @submit.passive="execute()"
  />
  <AuthSignUpInvalidToken v-else-if="tokenIsValid === false" />
  <AuthSignUpIntroduction v-else />
</template>
