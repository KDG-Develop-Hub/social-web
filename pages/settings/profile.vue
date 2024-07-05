<script setup lang="ts">
  import {
    DialogRoot,
    DialogTrigger,
    FileUploadContext,
    FileUploadDropzone,
    FileUploadHiddenInput,
    FileUploadItem,
    FileUploadItemDeleteTrigger,
    FileUploadItemPreview,
    FileUploadItemPreviewImage,
    FileUploadLabel,
    FileUploadRoot,
    FileUploadTrigger
  } from '@ark-ui/vue'

  const file = ref<File | null>(null)
  const user: User = {
    avatarUrl: 'https://via.placeholder.com/256',
    bio: '',
    birthday: new Date(),
    displayName: 'imeankenshin',
    website: 'https://example.com',
    name: 'Kenshin Ito',
    email: 'itoken@kdg.social'
  }
  const acceptedImageTypes = ['jpeg', 'png', 'gif', 'webp']
</script>

<template>
  <h2>プロフィール</h2>
  <div class="row profile full-width">
    <div>
      <DialogRoot>
        <DialogTrigger class="avatar-wrapper">
          <div class="avatar-backdrop" />
          <span class="avatar-label label-md">アバターを変更</span>
          <img
            :src="user.avatarUrl"
            class="square avatar"
            :alt="`${user.displayName}のアバター`"
          />
        </DialogTrigger>
        <MaterialDialog>
          <FileUploadRoot
            :max-files="1"
            :max-file-size="50 * 1024 ** 2"
            :accept="acceptedImageTypes.map(i => `image/${i}`).join(',')"
          >
            <FileUploadContext v-slot="{ acceptedFiles }">
              <FileUploadItem
                v-if="acceptedFiles.length"
                as-child
                :file="acceptedFiles[0]"
              >
                <form class="avatar-change-accept">
                  <FileUploadItemPreview type="image/*">
                    <FileUploadItemPreviewImage class="square avatar" />
                  </FileUploadItemPreview>
                  このファイルをアップロードしますか？
                  <div class="h-stack">
                    <FileUploadItemDeleteTrigger as-child>
                      <MaterialButton variant="text"
                        >んーこれじゃないな</MaterialButton
                      >
                    </FileUploadItemDeleteTrigger>
                    <MaterialButton type="submit"
                      >アップロードする！</MaterialButton
                    >
                  </div>
                </form>
              </FileUploadItem>
              <FileUploadDropzone v-else class="avatar-drop-zone">
                <FileUploadLabel
                  >枠線にファイルをドラッグ&ドロップ(5MB以下)</FileUploadLabel
                >
                <span>もしくは...</span>
                <FileUploadTrigger as-child>
                  <MaterialButton>ファイルを選択</MaterialButton>
                </FileUploadTrigger>
              </FileUploadDropzone>
              <FileUploadHiddenInput v-model="file" name="avatar" />
            </FileUploadContext>
          </FileUploadRoot>
        </MaterialDialog>
      </DialogRoot>
    </div>
    <form class="fields v-stack full-width">
      <MaterialTextField full-width label="表示名" required />
      <MaterialTextField full-width label="メールアドレス" required />
      <MaterialTextField full-width prefix="https://" label="ウェブサイト" />
      <MaterialTextField full-width label="自己紹介" multi-line />
      <div class="h-stack button-set full-width">
        <MaterialButton type="submit">変更を保存する！</MaterialButton>
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
    border-radius: var(--md-sys-shape-corner-full);
    --square-size: 16rem;
    object-fit: cover;
  }

  .avatar-wrapper {
    position: relative;
    border-radius: var(--md-sys-shape-corner-full);
    overflow: hidden;
    display: grid;
    place-items: center;
    padding: 0;
    background: none;
    border: none;
  }

  .avatar-label,
  .avatar-backdrop {
    transition: opacity var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);

    .avatar-wrapper:hover & {
      opacity: 1;
    }
  }

  .avatar-label {
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
    border: 1px dashed var(--md-sys-color-outline-variant);
  }

  .avatar-accept-enter-active,
  .avatar-accept-leave-active {
    transition: opacity var(--md-sys-motion-duration-short4)
      var(--md-sys-motion-easing-emphasized);
  }

  .avatar-accept-enter,
  .avatar-accept-leave-to {
    position: absolute;
    opacity: 0;
  }

  .button-set {
    justify-content: flex-end;
  }
</style>
