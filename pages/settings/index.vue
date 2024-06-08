<script setup lang="ts">
import { Dialog as ArkDialog } from '@ark-ui/vue'
</script>

<template>
  <div>
    <h2>アカウント情報</h2>
    <div class="text-fields v-stack">
      <MaterialTextField
        min-length="1"
        type="text"
        autocomplete="name"
        full-width
        max-length="32"
        label="名前"
      />
      <MaterialTextField min-length="1" full-width max-length="32" label="表示名" hint="半角英数" />
    </div>
    <h2 ref="title">アカウントの無効</h2>
    <ArkDialog.Root>
      <ArkDialog.Trigger as-child>
        <MaterialButton color="danger">アカウントを無効化</MaterialButton>
      </ArkDialog.Trigger>
      <MaterialDialog>
        <ArkDialog.Title v-once> アカウントを無効化しますか？</ArkDialog.Title>
        <ArkDialog.Description v-once>
          アカウントを無効化すると、アカウントに関連する全てのデータが削除されます。
        </ArkDialog.Description>
        <MaterialDialogButtonList>
          <ArkDialog.CloseTrigger as-child>
            <MaterialButton color="danger" variant="text">キャンセル</MaterialButton>
          </ArkDialog.CloseTrigger>
          <MaterialButton color="danger">アカウントを無効化</MaterialButton>
        </MaterialDialogButtonList>
      </MaterialDialog>
    </ArkDialog.Root>
  </div>
</template>

<style scoped>
.text-fields {
  width: 100%;
  max-width: 32rem;
}

h2 {
  margin-bottom: 1rem;
}
</style>
