<template>
  <button class="submit-btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  emits: ['click'],
};
</script>

<style lang="scss" scoped>
.submit-btn {
  width: 120px;
  height: 40px;
}
</style>
