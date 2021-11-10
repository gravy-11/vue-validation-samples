<template>
  <div>
    <input type="email" name="email" v-model="email" />
    <span>{{ emailError }}</span>
    <button @click="onSubmit">Add User</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField, useForm } from 'vee-validate';

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
  setup() {
    const { handleSubmit } = useForm();
    const onSubmit = handleSubmit((values) => console.log(values));

    const validateEmail = Yup.string().email().required();

    const { value: email, errorMessage: emailError } = useField(
      'email',
      validateEmail
    );

    return { onSubmit, emailError, email };
  },
});
</script>

<style scoped></style>
