<script setup lang="ts">
  definePageMeta({
    layout: false
  })
  const router = useRouter()
  const email = ref('')
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
  watch(mailIsSent, () => {
    if (mailIsSent.value) {
      router.push('/login/sent')
    }
  })
</script>

<template>
  <NuxtLayout name="auth">
    <template #title>ログイン</template>
    <template #description>
      入力されたメールアドレス宛に、ログインするためのリンクを送信します。
    </template>
    <form class="login-form" @submit.prevent="execute()">
      <div class="login-form-content">
        <MaterialTextField
          v-model="email"
          v-focus
          required
          label="メールアドレス"
          type="email"
          autocomplete="email"
        />
      </div>
    </form>
    <template #actions>
      <MaterialButton type="submit" :disabled="isLoading">
        ログインする
      </MaterialButton>
    </template>
  </NuxtLayout>
</template>

<style lang="css" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
  }
  .login-form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
</style>
