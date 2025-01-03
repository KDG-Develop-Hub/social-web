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
  const reset = () => {
    email.value = ''
    mailIsSent.value = false
  }
</script>

<template>
  <form v-if="!mailIsSent" class="login-form" @submit.prevent="execute()">
    <div class="login-form-content">
      <h2 class="headline-md">ログイン</h2>
      <p class="body-md">
        入力されたメールアドレス宛に、ログインするためのリンクを送信します。
      </p>
      <MaterialTextField
        v-model="email"
        v-focus
        required
        label="メールアドレス"
        type="email"
        autocomplete="email"
      />
    </div>
    <div class="button-set">
      <MaterialButton type="submit" :disabled="isLoading">
        送信する
      </MaterialButton>
    </div>
  </form>
  <div v-else class="login-form">
    <div class="login-form-content">
      <h2 class="headline-md">ログイン用のメールを送信しました</h2>
      <p class="body-md">
        ご自身のメールアドレスにログイン用のメールを送信しました。
        <br />
        メールに記載されたリンクをクリックして、ログインしてください。
      </p>
    </div>
    <div class="button-set">
      <MaterialButton
        variant="outlined"
        :disabled="isLoading"
        @click="reset()"
      >
        メールを再入力する
      </MaterialButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .login-form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
  .button-set {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 1rem;
  }
</style>
