<template>
  <button :class="['submit-btn', sizeClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    size: {
      type: String as PropType<'md' | 'sm' | 'xs'>,
      default: 'md',
    },
  },
  emits: ['click'],
  setup(props) {
    const sizeClass = computed(() => `${props.size}-btn`);
    console.log('hi');

    return { sizeClass };
  },
});
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
