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
    <article v-for="tweet in tweets" :key="tweet.userId" class="tweet">
      <MaterialAvatar
        :name="users[tweet.userId].name"
        :src="users[tweet.userId].avatarUrl"
      />
      <div class="body">
        <header class="h-stack">
          <strong>{{ users[tweet.userId].name }}</strong>
          <time
            class="md-sys-typescale-body-small"
            :datetime="dateTimeFormatter.format(tweet.createdAt)"
            >{{ formatDistanceFromNow(tweet.createdAt) }}</time
          >
        </header>
        <p>{{ tweet.content }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
  .articles {
    width: 100%;
    gap: 1rem;
    padding: 1.5rem 0;
  }
  .tweet {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--md-sys-color-outline-variant);
    border-radius: 0.75rem;
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
