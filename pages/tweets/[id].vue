<script setup lang="ts">
  import { doc } from 'firebase/firestore'

  const route = useRoute()
  const id = route.params.id as string
  const db = useFirestore()
  const { data: tweet, pending } = useDocument<Post>(doc(db, 'posts', id), {
    ssrKey: `tweet-${id}`
  })
  const replies: Post[] = Array.from({ length: 40 }, () => ({
    id: '1',
    userId: '1',
    userName: 'test',
    userImageUrl: 'https://via.placeholder.com/256',
    content: 'test',
    createdAt: new Date().toISOString(),
    bookmarkedUserIds: [],
    imageUrls: [],
    reactions: null,
    updatedAt: null
  }))
  watchEffect(() => {
    if (!tweet.value && !pending.value)
      showError({ statusCode: 404, message: 'Tweet not found' })
  })
</script>

<template>
  <div class="tweet-page">
    <div v-if="!pending && tweet" class="tweet">
      <MaterialAvatar
        size="md"
        :name="tweet.userName"
        :src="tweet.userImageUrl"
      />
      <div class="tweet-content">
        <div class="body-lg">{{ tweet.userName }}</div>
        <div class="label-md tweeter-user-id">@{{ tweet.userId }}</div>
        <p class="body-lg">{{ tweet.content }}</p>
      </div>
    </div>
    <div v-else>
      <MaterialCircularProgressIndicator indeterminate />
    </div>
    <MaterialDivider />
    <div class="reply-list">
      <OrgTweet v-for="reply in replies" :key="reply.id" :post="reply" />
    </div>
    <div class="reply-input-positioner">
      <TweetReplyInput />
    </div>
  </div>
</template>

<style scoped>
  .tweet {
    display: flex;
    gap: 0.5rem;
  }
  .tweet-page {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 48rem;
    gap: 1rem;
    height: 100%;
  }
  .tweet-content {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .tweeter-user-id {
    user-select: all;
    color: var(--md-sys-color-on-surface-variant);
  }
  .reply-list {
    flex-grow: 1;
  }
  .reply-input-positioner {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
