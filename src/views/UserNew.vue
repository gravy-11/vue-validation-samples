<template>
  <Form @submit="onSubmit" class="form" :validation-schema="schema">
    <div class="form-group">
      <BaseInput label="お名前" name="name" autocomplete="name" />

      <BaseInput
        label="メールアドレス"
        name="email"
        type="email"
        autocomplete="email"
      />

      <BaseInput
        label="メールアドレス(確認用)"
        name="emailConfirmation"
        type="email"
        autocomplete="email"
      />

      <BaseRadios name="sex" :options="sexOptions" label="性別" type="radio" />

      <BaseRadios
        name="interest"
        :options="interestOptions"
        label="興味があること"
        type="checkbox"
      />

      <BaseSelect name="prefecture" label="出身県">
        <option
          v-for="(prefecture, idx) of prefectures"
          :value="idx"
          :key="idx"
        >
          {{ prefecture }}
        </option>
      </BaseSelect>
    </div>
    <BaseButton>Submit!</BaseButton>
  </Form>
</template>

<script lang="ts" setup>
import { Form, SubmissionHandler } from 'vee-validate';
import * as yup from 'yup';

import BaseInput from '@/components/BaseInput.vue';
import BaseRadios from '@/components/BaseRadios.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import BaseButton from '@/components/BaseButton.vue';
import { Option } from '@/types';

type Fields = {
  name: string;
  email: string;
  emailConfirmation: string;
  sex: 'man' | 'woman';
  interest: number[];
  prefecture?: number;
};

const schema: yup.SchemaOf<Fields> = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  emailConfirmation: yup.string().required(),
  sex: yup.mixed().oneOf(['man', 'woman']).required(),
  interest: yup.array(),
  prefecture: yup.number(),
});

const sexOptions: Option[] = [
  { label: '男', value: 'man' },
  { label: '女', value: 'woman' },
];

const interestOptions: Option[] = [
  { label: 'サッカー', value: 0 },
  { label: '野球', value: 1 },
];

const prefectures = ['神奈川', '東京', '大阪', '京都', '福岡'];

const onSubmit: SubmissionHandler = (values) => {
  console.log(values);
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px auto;
  gap: 60px;
}

.form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
