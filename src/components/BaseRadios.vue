<template>
  <div class="form-item">
    <span v-if="label">{{ label }}</span>
    <div>
      <label v-for="option of options" :key="option.value">
        <Field :name="name" :value="option.value" :type="type" />
        {{ option.label }}
      </label>
    </div>
    <ErrorMessage name="sex" />
  </div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from 'vee-validate';

defineProps<{
  name: string;
  options: Option[];
  type: 'radio' | 'checkbox';
  label?: string;
}>();
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
