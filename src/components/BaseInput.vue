<template>
  <div class="form-item">
    <label v-if="name" :for="name">{{ label }}</label>
    <Field :id="name" :name="name" class="form-item-input" v-bind="$attrs" />
    <ErrorMessage :name="name" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Field, ErrorMessage } from 'vee-validate';

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
    label: String,
  },
});
</script>

<style scoped lang="scss">
.form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-item-input {
  width: 100%;
  height: 30px;
}
</style>
