<script setup lang="ts">
import { Dialog as ArkDialog } from '@ark-ui/vue'
import { Compass, Feather, History, Settings2, User, Users } from 'lucide-vue-next'

const currentUser = useCurrentUserStore()
const linkContents = ref([
  { to: '/', icon: History, text: 'アプデ' },
  { to: '/browse', icon: Compass, text: '見つける' },
  { to: `/u/${currentUser.name}`, icon: User, text: '君とは' },
  { to: '/friends', icon: Users, text: '知り合い' },
  { to: '/settings', icon: Settings2, text: 'せってー' }
])
</script>

<template>
  <div class="layout">
    <MaterialNavigationRail>
      <template #fab>
        <ArkDialog.Root id="compose">
          <ArkDialog.Trigger as-child>
            <MaterialFAB>
              <Feather />
            </MaterialFAB>
          </ArkDialog.Trigger>
          <MaterialDialog content-tag="form">
            <template #icon>
              <Feather />
            </template>
            <ArkDialog.Title class="title"> 今回は何を綴るのかな？</ArkDialog.Title>
            <ArkDialog.Description>
              自分の考えや出来事を気楽に書こう！コミュニティーガイドラインの確認も忘れないでねッ！
            </ArkDialog.Description>
            <MaterialDivider />
            <div class="resize">
              <MaterialTextField name="content" label="内容" multi-line max-length="256" />
            </div>
            <template #buttons>
              <ArkDialog.CloseTrigger as-child>
                <MaterialButton variant="text">やっぱやめる</MaterialButton>
              </ArkDialog.CloseTrigger>
              <MaterialButton type="submit">広めちゃう</MaterialButton>
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

.title {
  text-align: center;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}
</style>
