<script setup lang="ts">
  const tweets: Tweet[] = Array.from({ length: 6 }, () => ({
    userId: 1,
    content: 'Hello world! This is my tweet you know?',
    createdAt: dateFns.add(new Date(), { minutes: -20 })
  }))
  const users: Record<Tweet['userId'], BasicUserInfo> = {
    1: {
      avatarUrl: 'https://via.placeholder.com/32',
      name: 'imeankenshin',
      displayName: 'Kenshin'
    }
  }
</script>

<template>
  <div class="articles v-stack">
    <OrgTweet
      v-for="tweet in tweets"
      :key="tweet.userId"
      :tweet="tweet"
      :user="users[tweet.userId]"
    />
  </div>
</template>

<style scoped>
  .articles {
    width: 100%;
    gap: 1rem;
    padding: 1.5rem 0;
  }
</style>
