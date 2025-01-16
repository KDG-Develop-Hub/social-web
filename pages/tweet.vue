<script setup lang="ts">
  const tweets: Post[] =
    Array.from({ length: 40 }, () => ({
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

</script>

<template>
  <div class="tweet-page">
    <div class="reply-list">
      <OrgTweet v-for="tweet in tweets" :key="tweet.id" :post="tweet" />
    </div>
    <div class="reply-input-positioner">
      <TweetReplyInput />
    </div>
  </div>
</template>

<style scoped>
  .tweet-page {
    display: flex;
    flex-direction: column;
    height: 100%;
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
