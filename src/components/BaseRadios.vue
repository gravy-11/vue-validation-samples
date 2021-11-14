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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';

export type Option = {
  label: string;
  value: string | number;
};

export default defineComponent({
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Object as PropType<Option[]>,
      required: true,
    },
    type: {
      validator: (value: string) => ['radio', 'checkbox'].includes(value),
      required: true,
    },
    label: String,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
