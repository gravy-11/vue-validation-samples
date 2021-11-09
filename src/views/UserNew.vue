<template>
  <Form @submit="onSubmit">
    <Field type="email" name="email" :rules="validateEmail" />
    <ErrorMessage name="email" />
    <button submit>Add User</button>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';

import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: '必須入力項目です',
  },
  string: {
    email: '形式が違います',
  },
});

export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const onSubmit = (values: any): void => console.log(values);

    const validateEmail = Yup.string().email().required();
    return { onSubmit, validateEmail };
  },
});
</script>

<style scoped></style>
