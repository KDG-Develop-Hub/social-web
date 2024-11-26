<script setup lang="ts">
  import { Menu } from '@ark-ui/vue'

  defineProps<{
    /**
     * 投稿が読み込み専用ならば、メニューを表示しない。
     */
    readonly?: boolean
    tweet: Tweet
    user: BasicUserInfo
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
</script>

<template>
  <article :key="tweet.userId" class="tweet">
    <MaterialAvatar size="sm" :name="user.name" :src="user.avatarUrl" />
    <div class="body">
      <div class="h-stack">
        <div class="h-stack full-width">
          <span class="body-lg">{{ user.name }}</span>
          <time
            class="body-sm"
            :datetime="dateTimeFormatter.format(tweet.createdAt)"
          >
            {{ formatDistanceFromNow(tweet.createdAt) }}
          </time>
        </div>
        <Menu.Root v-if="!readonly" :id="menuId" @select="handleSelect">
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
      <p>{{ tweet.content }}</p>
    </div>
  </article>
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
    box-sizing: border-box;
    width: 100%;
    display: flex;
    gap: 0.75rem;
  }
  .body {
    width: 100%;

    header {
      height: 1.5rem;
    }
  }
</style>
