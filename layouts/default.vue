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
        <ArkDialog.Root>
          <ArkDialog.Trigger as-child>
            <MaterialFAB>
              <Feather />
            </MaterialFAB>
          </ArkDialog.Trigger>
          <MaterialDialog as-child>
            <ArkDialog.Title> 今回は何を綴るのかな？</ArkDialog.Title>
            <ArkDialog.Description as-child>
              <p class="description">
                自分の考えや出来事を気楽に書こう！コミュニティーガイドラインの確認も忘れないでねッ！
              </p>
              <div class="border-bottom"/>
            </ArkDialog.Description>
            <MaterialTextField label="内容" type="text" max-length="256" helper-text="0/256" />
            <template #buttons>
              <ArkDialog.CloseTrigger as-child>
                <MaterialButton variant="text">やっぱやめる</MaterialButton>
              </ArkDialog.CloseTrigger>
              <MaterialButton color="primary">広めちゃう</MaterialButton>
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

.dialog {
  width: 35px;
  overflow: visible;
}

.border-bottom {
  border-bottom: solid 1px #fff;
}

main {
  overflow-y: auto;
  width: 100%;
  padding: 2rem 1.5rem;
}
</style>
