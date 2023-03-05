import "../../index.css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchBar } from "./SearchBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchBar> = ({ value }) => (
  <SearchBar value={value} />
);

export const Primary = Template.bind({});
Primary.args = {
  value: "Keyboard",
};
