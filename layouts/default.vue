<script setup lang="ts">
import { Dialog as ArkDialog, FileUpload } from '@ark-ui/vue'
import {
  Compass,
  Feather,
  History,
  ImagePlus,
  Menu,
  Settings2,
  User,
  Users,
  X
} from 'lucide-vue-next'

const currentUser = useCurrentUserStore()
const linkContents = ref([
  { to: '/', icon: History, text: 'アプデ' },
  { to: '/browse', icon: Compass, text: '見つける' },
  { to: `/u/${currentUser.name}`, icon: User, text: '君とは' },
  { to: '/friends', icon: Users, text: '知り合い' },
  { to: '/settings', icon: Settings2, text: 'せってー' }
])

const inputText = ref('')
const buttonDisabled = computed(() => inputText.value.trim().length === 0)
</script>

<template>
  <div class="layout">
    <MaterialNavigationRail>
      <template #fab>
        <ArkDialog.Root>
          <ArkDialog.Trigger as-child>
            <MaterialFAB>
              <Feather />
            </MaterialFAB>
          </ArkDialog.Trigger>
          <MaterialDialog>
            <template #icon>
              <Feather stroke="var(--color-primary)" />
            </template>
            <ArkDialog.Title class="ark-dialog-title">今回は何を綴るのかな？</ArkDialog.Title>
            <ArkDialog.Description as-child>
              <p class="description">
                自分の考えや出来事を気楽に書こう！ミュニティーガイドラインの確認も忘れないでねッ！
              </p>
              <div class="border-bottom" />
            </ArkDialog.Description>
            <MaterialTextField
              v-model="inputText"
              label="内容"
              type="text"
              max-length="256"
              helper-text="0/256"
              multi-line
              max-rows="16"
            />
            <FileUpload.Root :max-files="3" accept="image/*">
              <FileUpload.ItemGroup class="ark-file-upload-item-group image-list">
                <FileUpload.Context v-slot="{ acceptedFiles }">
                  <div v-for="file in acceptedFiles" :key="file.name" class="file-item">
                    <FileUpload.Item :file="file">
                      <FileUpload.ItemPreview type="image/*" class="image-list">
                        <FileUpload.ItemPreviewImage class="image" />
                        <FileUpload.ItemDeleteTrigger class="delete-trigger">
                          <X style="height: 20px" />
                        </FileUpload.ItemDeleteTrigger>
                      </FileUpload.ItemPreview>
                    </FileUpload.Item>
                  </div>
                </FileUpload.Context>
              </FileUpload.ItemGroup>
              <FileUpload.HiddenInput />
              <div class="icons">
                <FileUpload.Label>
                  <ImagePlus />
                </FileUpload.Label>
                <span>
                  <Menu />
                </span>
              </div>
            </FileUpload.Root>
            <template #buttons>
              <ArkDialog.CloseTrigger as-child>
                <MaterialButton variant="text">やっぱやめる</MaterialButton>
              </ArkDialog.CloseTrigger>
              <MaterialButton :color="buttonDisabled ? '' : 'primary'" :disabled="buttonDisabled">
                広めちゃう
              </MaterialButton>
            </template>
          </MaterialDialog>
        </ArkDialog.Root>
      </template>
      <template #link-list>
        <MaterialNavigationRailLink
          v-for="linkContent in linkContents"
          :key="linkContent.to"
          :to="linkContent.to"
          :label="linkContent.text"
          :icon="linkContent.icon"
        />
      </template>
    </MaterialNavigationRail>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}

.border-bottom {
  border-bottom: solid 1px var(--palette-secondary90);
}

.icons {
  display: flex;
  gap: 20px;
}

.ark-dialog-title {
  text-align: center;
}

.ark-file-upload-item-group {
  list-style: none;
  padding-left: 5px;
}

.image-list {
  display: flex;
  gap: 10px;
}

.image {
  border-radius: 4px;
  width: 64px;
  height: 64px;
}

.file-item {
  position: relative;
  margin-bottom: 20px;
}

.delete-trigger {
  position: absolute;
  top: 0;
  right: -7px;
  background: transparent;
  color: var(--palette-secondary90);
  border: none;
  cursor: pointer;
  display: none;
}

.file-item:hover .delete-trigger {
  display: block;
  font-size: 4px;
}
</style>
