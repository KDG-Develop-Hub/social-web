<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })
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
</script>

<template>
  <form v-if="!mailIsSent" class="column full-height" @submit.prevent="execute()">
    <div class="login-form-fields">
      <h2 class="headline-md">ログイン</h2>
      <p class="body-md">
        入力されたメールアドレス宛に、ログインするためのリンクを送信します。
      </p>
      <MaterialTextField v-model="email" required label="メールアドレス" type="email" />
    </div>
    <div class="button-set">
      <MaterialButton type="submit" :disabled="isLoading">
        送信する
      </MaterialButton>
    </div>
  </form>
  <div v-else>
    <h2 class="headline-md">ログイン用のメールを送信しました</h2>
    <p class="body-md">
      ご自身のメールアドレスにログイン用のメールを送信しました。
      <br />
      メールに記載されたリンクをクリックして、ログインしてください。
    </p>
  </div>
</template>

<style lang="css" scoped>
  .login-form-fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
  .button-set {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
</style>
