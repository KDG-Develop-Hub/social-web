<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'

  const { post } = defineProps<{
    post: Post
  }>()
  const menuId = useId()

  function handleSelect({ value }: { value: string }) {
    switch (value) {
      case 'reply':
        // TODO: コメントダイアログを表示する
        break
      case 'emoji':
        // TODO: 絵文字ダイアログを表示する
        break
      case 'bookmark':
        // TODO: ブックマークする
        break
      case 'share':
        // TODO: リンクを共有する
        break
      case 'delete':
        // TODO: 削除ダイアログを表示する
        break
      case 'report':
        // TODO: 報告ダイアログを表示する
        break
    }
  }
  function jumpToTweetPage() {
    navigateTo(`/tweets/${post.id}`)
  }
</script>

<template>
  <div
    role="link"
    :to="`/tweets/${post.id}`"
    class="tweet"
    @click.self="jumpToTweetPage"
  >
    <MaterialAvatar size="sm" :name="post.userName" :src="post.userImageUrl" />
    <div class="body" @click.self="jumpToTweetPage">
      <div class="tweet-header" @click.self="jumpToTweetPage">
        <div class="h-stack">
          <span class="body-lg">{{ post.userName }}</span>
          <time
            class="body-sm"
            :datetime="
              post.createdAt ? formatDateTime(post.createdAt) : 'error!!'
            "
          >
            {{ post.createdAt ? formatDistanceFromNow(post.createdAt) : '' }}
          </time>
        </div>
        <div class="tweet-more-wrapper">
          <Menu.Root :id="menuId" @select="handleSelect">
            <Menu.Trigger as-child>
              <MaterialIconButton>
                <Icon name="material-symbols:more-vert" />
              </MaterialIconButton>
            </Menu.Trigger>
            <MaterialMenuContainer>
              <MaterialMenuItem value="reply">
                <template #leading-icon>
                  <Icon name="material-symbols:mode-comment-outline-rounded" />
                </template>
                返信する
              </MaterialMenuItem>
              <MaterialMenuItem value="emoji">
                <template #leading-icon>
                  <Icon name="material-symbols:add-reaction-outline-rounded" />
                </template>
                絵文字
              </MaterialMenuItem>
              <MaterialMenuItem value="bookmark">
                <template #leading-icon>
                  <Icon name="material-symbols:bookmark-outline-rounded" />
                </template>
                ブックマーク
              </MaterialMenuItem>
              <MaterialMenuItem value="share">
                <template #leading-icon>
                  <Icon name="material-symbols:share-outline" />
                </template>
                共有する
              </MaterialMenuItem>
              <MaterialMenuItem value="delete">
                <template #leading-icon>
                  <Icon name="material-symbols:delete-outline-rounded" />
                </template>
                削除する
              </MaterialMenuItem>
              <MaterialMenuItem value="report">
                <template #leading-icon>
                  <Icon name="material-symbols:flag-outline-rounded" />
                </template>
                報告する
              </MaterialMenuItem>
            </MaterialMenuContainer>
          </Menu.Root>
        </div>
      </div>
      <p class="tweet-content">{{ post.content }}</p>
    </div>
  </div>
</template>

<style scoped>
  .icon-button {
    border-radius: var(--md-sys-shape-corner-full);
    display: inline-grid;
    place-items: center;
    height: 2rem;
    width: 2rem;
  }
  .tweet {
    padding: 1rem;
    pointer-events: auto;
    text-decoration: none;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    gap: 0.75rem;
    border-radius: var(--md-sys-shape-corner-md);
    &:hover {
      background-color: var(--md-sys-color-surface-container);
    }
  }
  .tweet-header {
    display: flex;
    justify-content: space-between;
  }
  .tweet-content {
    width: fit-content;
  }
  .tweet-more-wrapper {
    margin-left: 0.5rem;
  }
  .body {
    width: 100%;

    header {
      height: 1.5rem;
    }
  }
</style>
