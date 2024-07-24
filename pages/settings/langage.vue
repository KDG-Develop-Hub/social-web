<script lang="ts"></script>

<template>
  <h2>言語</h2>
  <div class="langage">
    <div class="langage-select">
      <input id="lang_ja" type="radio" name="langage" />
      <div class="langage-select-name">
        <label for="lang_ja"> 日本語 </label>
      </div>
    </div>
    <div class="langage-select">
      <input id="lang_en-US" type="radio" name="langage" />
      <div class="langage-select-name">
        <label for="lang_en-US"> 英語 </label>
      </div>
    </div>
    <div class="langage-select">
      <input id="lang_fr-FR" type="radio" name="langage" />
      <div class="langage-select-name">
        <label for="lang_fr-FR"> フランス </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    margin-bottom: 1rem;
  }

  .langage {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .langage-select {
    display: flex;
    align-items: center;
    user-select: none;
    gap: 1rem;
  }

  .langage-select input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    position: relative;
  }

  .langage-select input:checked::before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--md-sys-color-primary);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .langage-select input:checked {
    border: 1px solid var(--md-sys-color-primary);
  }
</style>
