<template>
  <button :class="['submit-btn', sizeClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    size?: 'md' | 'sm' | 'xs';
  }>(),
  {
    size: 'md',
  }
);

defineEmits<{
  (e: 'click'): void;
}>();

const sizeClass = computed(() => `${props.size}-btn`);
</script>

<style lang="scss" scoped>
.submit-btn {
  height: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.md-btn {
  width: 120px;
}

.sm-btn {
  width: 100px;
}

.xs-btn {
  width: 80px;
}
</style>
