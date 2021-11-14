<template>
  <div class="form-item">
    <span>出身県</span>
    <Field :name="name" as="select">
      <slot />
    </Field>
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
      retuired: true,
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
