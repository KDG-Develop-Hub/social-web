<script setup lang="ts">
  const tweet = {
    id: '1',
    userId: 'nihonkokukenpou',
    userName: '日本国憲法',
    userImageUrl: 'https://via.placeholder.com/256',
    content: `日本国民は、正当に選挙された国会における代表者を通じて行動
し、われらとわれらの子孫のために、諸国民との協和による成果
と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行
為によつて再び戦争の惨禍が起ることのないやうにすることを決意
し、ここに主権が国民に存することを宣言し、この憲法を確定す
る。そもそも国政は、国民の厳粛な信託によるものであつて、その
権威は国民に由来し、その権力は国民の代表者がこれを行使し、そ
の福利は国民がこれを享受する。これは人類普遍の原理であり、こ
の憲法は、かかる原理に基くものである。われらは、これに反する
一切の憲法、法令及び詔勅を排除する。`,
    createdAt: new Date().toISOString(),
    bookmarkedUserIds: [],
    imageUrls: [],
    reactions: null,
    updatedAt: null
  }
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
</script>

<template>
  <div class="tweet-page">
    <div class="tweet">
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
