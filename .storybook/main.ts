import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../lib/**/stories.tsx"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
