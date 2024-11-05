<script lang="ts" setup>
  defineProps<{ title: string }>()
</script>

<template>
  <div class="base-container">
    <div class="base-panel">
      <div class="title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-container {
  width: 235px;
  padding: 8px;
  box-sizing: border-box;
  .base-panel {
    height: 297px;
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid #ddd;
    border-radius: 2px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    -webkit-app-region: drag;
    .title {
      padding: 4px 0 0 6.5px;
      font-size: 12px;
      color: #888;
      text-align: left;
    }
    .content-area {
      flex-grow: 1;
      overflow-y: auto;
      -webkit-app-region: no-drag;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
}
</style>