// import type { Story, Meta } from '@storybook/vue3';
// import { action } from '@storybook/addon-actions';
// import BaseButton from '@/components/BaseButton.vue';

// export default {
//   title: 'Components/BaseButton',
//   components: BaseButton,
//   parameters: {
//     backgrounds: {
//       values: [
//         { name: 'red', value: '#aa0000' },
//         { name: 'green', value: '#0000aa' },
//       ],
//     },
//   },
// } as Meta;

// type PropType = {
//   size: 'md' | 'sm' | 'xs';
// };

// const Template: Story<PropType> = (args) => ({
//   components: { BaseButton },
//   setup() {
//     return { args, onClick: action('click') };
//   },
//   template: `
//     <BaseButton v-bind="args" @click="onClick">
//       Click here!!
//     </BaseButton>
//   `,
// });

// export const Medium = Template.bind({});
// Medium.args = {
//   size: 'md',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'sm',
// };

// export const ExtraSmall = Template.bind({});
// ExtraSmall.args = {
//   size: 'xs',
// };
