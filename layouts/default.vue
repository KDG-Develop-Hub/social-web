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

const compose = async (event: Event, setOpen: (value: boolean) => void) => {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const content = formData.get('content') as string
  if (content.length === 0 && content.length > 256) {
    return
  }
  form.reset()
  setOpen(false)
}
const handleKeydown = (event: KeyboardEvent) => {
  const isMacOS = navigator.userAgent.includes('Mac OS X')
  const isSubmit = event.key === 'Enter' && (isMacOS ? event.metaKey : event.ctrlKey)
  if (isSubmit) {
    event.preventDefault()
    document.getElementById('compose-submit')?.click()
  }
}
</script>

<template>
  <div class="layout">
    <MaterialNavigationRail>
      <template #fab>
        <ArkDialog.Root id="compose">
          <ArkDialog.Context v-slot="{ setOpen }">
            <ArkDialog.Trigger as-child>
              <MaterialFAB>
                <Feather />
              </MaterialFAB>
            </ArkDialog.Trigger>
            <MaterialDialog as-child content-tag="form">
              <form @keydown="handleKeydown" @submit="e => compose(e, setOpen)">
                <MaterialDialogIconWrapper>
                  <Feather />
                </MaterialDialogIconWrapper>
                <ArkDialog.Title class="title"> 今回は何を綴るのかな？</ArkDialog.Title>
                <ArkDialog.Description>
                  自分の考えや出来事を気楽に書こう！コミュニティーガイドラインの確認も忘れないでねッ！
                </ArkDialog.Description>
                <MaterialDivider />
                <div class="resize">
                  <MaterialTextField name="content" label="内容" multi-line max-length="256" />
                </div>
                <MaterialDialogButtonList>
                  <ArkDialog.CloseTrigger as-child>
                    <MaterialButton variant="text">やっぱやめる</MaterialButton>
                  </ArkDialog.CloseTrigger>
                  <MaterialButton id="compose-submit" type="submit">広めちゃう</MaterialButton>
                </MaterialDialogButtonList>
              </form>
            </MaterialDialog>
          </ArkDialog.Context>
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
