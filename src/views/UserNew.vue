<template>
  <Form @submit="onSubmit">
    <Field type="email" name="email" :rules="validateEmail" />
    <ErrorMessage name="email" />
    <button submit>Add User</button>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const onSubmit = (values: any): void => console.log(values);

    const validateEmail = (value: string): string | true => {
      if (!value) {
        return "This field is required.";
      }

      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }

      return true;
    };
    return { onSubmit, validateEmail };
  },
});
</script>

<style scoped></style>
