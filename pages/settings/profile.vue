<script setup lang="ts">
import type {User} from "~/types/user";
import {
  FileUploadContext,
  FileUploadDropzone,
  FileUploadHiddenInput,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadLabel,
  FileUploadRoot,
  FileUploadTrigger,
  DialogRoot, DialogTrigger,
} from "@ark-ui/vue";
const file = ref<File | null>(null);
const user: User = {
  avatarUrl: "https://via.placeholder.com/256",
  bio: "",
  birthday: new Date(),
  displayName: "imeankenshin",
  website: "https://example.com",
  name: "Kenshin Ito",
  email: "itoken@kdg.social"
}
const acceptedImageTypes = ["jpeg", "png", "gif", "webp"];
</script>

<template>
  <h2>プロフィール</h2>
  <div class="row profile full-width">
    <div>
      <DialogRoot>
        <DialogTrigger class="avatar-wrapper">
          <div class="avatar-backdrop"/>
          <span class="avatar-label">アバターを変更</span>
          <img :src="user.avatarUrl" class="square avatar" :alt="`${user.displayName}のアバター`"/>
        </DialogTrigger>
        <Dialog>
          <FileUploadRoot
              :max-files="1"
              :max-file-size="50 * 1024 ** 2"
              :accept="acceptedImageTypes.map(i=>`image/${i}`).join(',')"
          >
            <FileUploadContext v-slot="{ acceptedFiles }">
              <FileUploadItem v-if="acceptedFiles.length" as-child :file="acceptedFiles[0]">
                <form class="avatar-change-accept">
                  <FileUploadItemPreview type="image/*">
                    <FileUploadItemPreviewImage class="square avatar"/>
                  </FileUploadItemPreview>
                  このファイルをアップロードしますか？
                  <div class="h-stack">
                    <FileUploadItemDeleteTrigger as-child>
                      <Button variant="text">んーこれじゃないな</Button>
                    </FileUploadItemDeleteTrigger>
                    <Button type="submit">アップロードする！</Button>
                  </div>
                </form>
              </FileUploadItem>
              <FileUploadDropzone v-else class="avatar-drop-zone">
                <FileUploadLabel>枠線にファイルをドラッグ&ドロップ(5MB以下)</FileUploadLabel>
                <span>もしくは...</span>
                <FileUploadTrigger as-child>
                  <Button>ファイルを選択</Button>
                </FileUploadTrigger>
              </FileUploadDropzone>
              <FileUploadHiddenInput name="avatar" v-model="file"/>
            </FileUploadContext>
          </FileUploadRoot>
        </Dialog>
      </DialogRoot>
    </div>
    <form class="fields v-stack full-width">
      <TextField full-width label="表示名" required/>
      <TextField full-width label="メールアドレス" required/>
      <TextField full-width prefix="https://" label="ウェブサイト"/>
      <TextField full-width label="自己紹介" multi-line/>
      <div class="h-stack button-set full-width">
        <Button type="submit">変更を保存する！</Button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

.profile {
  gap: 4rem;
}

.fields {
  max-width: 32rem;
}

.avatar {
  border-radius: 8rem;
  --square-size: 16rem;
  object-fit: cover;
}

.avatar-wrapper {
  position: relative;
  border-radius: 99rem;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 0;
  background: none;
  border: none;
}

.avatar-label, .avatar-backdrop {
  transition: opacity 200ms ease-out;

  .avatar-wrapper:hover & {
    opacity: 1;
  }
}

.avatar-label {
  font-size: 0.875rem;
  text-align: center;
  display: block;
  color: white;
  position: absolute;
  opacity: 0;
}

.avatar-change-accept {
  display: grid;
  gap: 1rem;
  place-items: center;
  place-content: center;
}

.avatar-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: block;
  opacity: 0;

}

.avatar-drop-zone {
  height: 24rem;
  display: grid;
  place-content: center;
  place-items: center;
  gap: 1rem;
  border: 1px dashed var(--color-outline-variant);
}

.avatar-accept-enter-active, .avatar-accept-leave-active {
  transition: opacity 200ms ease-out;
}

.avatar-accept-enter, .avatar-accept-leave-to {
  position: absolute;
  opacity: 0;
}

.button-set {
  justify-content: flex-end;
}
</style>