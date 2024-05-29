<script setup lang="ts">
import {DialogRoot, DialogTitle, DialogDescription, DialogCloseTrigger, DialogTrigger} from "@ark-ui/vue";

const dialogId = useId()
</script>

<template>
  <h2>アカウント情報</h2>
  <div class="text-fields v-stack">
    <TextField min-length="1" type="text" autocomplete="name" full-width max-length="32" label="名前"/>
    <TextField min-length="1" full-width max-length="32" label="表示名" hint="半角英数"/>
  </div>
  <h2 ref="title">アカウントの無効</h2>
  <DialogRoot :id="dialogId">
    <DialogTrigger as-child>
      <Button color="danger">アカウントを無効化</Button>
    </DialogTrigger>
    <Dialog>
      <DialogTitle>
        アカウントを無効化しますか？
      </DialogTitle>
      <DialogDescription>
        アカウントを無効化すると、アカウントに関連する全てのデータが削除されます。
      </DialogDescription>
      <div class="button-set h-stack">
        <DialogCloseTrigger as-child>
          <Button color="danger" variant="text">キャンセル</Button>
        </DialogCloseTrigger>
        <Button color="danger">アカウントを無効化</Button>
      </div>
    </Dialog>
  </DialogRoot>
</template>

<style scoped>
.text-fields {
  width: 100%;
  max-width: 32rem;
}
h2 {
  margin-bottom: 1rem;
}
.button-set {
  justify-content: flex-end;
}
</style>