<script setup lang="ts">
import type {User} from "~/types/user";
import {
  FileUploadContext,
  FileUploadDropzone, FileUploadHiddenInput, FileUploadItem, FileUploadItemDeleteTrigger,
  FileUploadItemGroup, FileUploadItemName, FileUploadItemPreview, FileUploadItemPreviewImage, FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadRoot,
  FileUploadTrigger,
  DialogRoot, DialogTrigger,
} from "@ark-ui/vue";

const user: User = {
  avatarUrl: "https://via.placeholder.com/150",
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
  <form class="row profile full-width">
    <div>
      <DialogRoot>
        <DialogTrigger class="avatar">
          <div class="avatar-backdrop"/>
          <span class="avatar-label">アバターを変更</span>
          <img :src="user.avatarUrl" :alt="`${user.displayName}のアバター`"/>
        </DialogTrigger>
        <Dialog>
          <FileUploadRoot :max-files="1" :max-file-size="50 * 1024 ** 2"
                          :accept="acceptedImageTypes.map(i=>`image/${i}`).join(',')">
            <FileUploadDropzone class="avatar-drop-zone">
              <FileUploadLabel>枠線にファイルをドラッグ&ドロップ(5MB以下)</FileUploadLabel>
              <span>もしくは...</span>
              <FileUploadTrigger as-child>
                <Button>ファイルを選択</Button>
              </FileUploadTrigger>
            </FileUploadDropzone>
            <FileUploadItemGroup class="resize">
              <FileUploadContext v-slot="{ acceptedFiles }">
                <FileUploadItem v-for="file in acceptedFiles" :file="file" :key="file.name">
                  <FileUploadItemPreview type="image/*">
                    <FileUploadItemPreviewImage width="150" height="150"/>
                  </FileUploadItemPreview>
                  <FileUploadItemName/>
                  <FileUploadItemSizeText/>
                  <FileUploadItemDeleteTrigger>X</FileUploadItemDeleteTrigger>
                </FileUploadItem>
              </FileUploadContext>
            </FileUploadItemGroup>
            <FileUploadHiddenInput/>
          </FileUploadRoot>
        </Dialog>
      </DialogRoot>
    </div>
    <div class="fields v-stack full-width">
      <TextField full-width label="表示名" required/>
      <TextField full-width label="名前" required/>
      <TextField full-width label="メールアドレス" required/>
      <TextField full-width type="url" prefix="https://" label="ウェブサイト"/>
      <TextField full-width label="自己紹介" multi-line/>
      <div class="h-stack button-set full-width">
        <Button type="submit">変更を保存する！</Button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.profile {
  gap: 4rem;
}
.fields {
  max-width: 32rem;
}
.avatar {
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

  .avatar:hover & {
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

.button-set {
  justify-content: flex-end;
}
</style>