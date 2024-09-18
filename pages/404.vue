<template>
  <div>
    <div class="error-container">
      <h1 class="error-emoticon">(T_T)</h1>
      <h2 class="error-title">ページが見つかりませんでした。</h2>
      <p class="error-description">
        与えられたURLに対応するページは存在しないか、削除されました...
      </p>
    </div>
  </div>
</template>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .error-emoticon,
  .error-title,
  .error-description {
    text-align: center;
    font-weight: 400;
  }

  .error-emoticon {
    font-size: 3.5rem;
  }
  .error-title {
    font-size: 2.8rem;
  }

  .error-description {
    font-size: 1.1rem;
    margin-top: 1rem;
  }
</style>
