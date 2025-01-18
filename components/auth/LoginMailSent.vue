<template>
  <div>
    <AuthFormTitle>後もう一歩です！</AuthFormTitle>
    <AuthFormDescription>
      あなたのメールアドレスにログイン用のマジックリンクを送信しました。マジックリンクをクリックして、ログインしてください。
    </AuthFormDescription>
    <AuthFormActionButtonSet>
      <MaterialButton variant="outlined" @click="$emit('reset')">
        メールを再入力する
      </MaterialButton>
    </AuthFormActionButtonSet>
  </div>
</template>
