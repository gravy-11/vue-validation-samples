<template>
  <div class="form-item">
    <span>出身県</span>
    <Field :name="name" as="select">
      <slot />
    </Field>
    <ErrorMessage :name="name" />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from 'vee-validate';

defineProps<{
  name: string;
}>();
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
