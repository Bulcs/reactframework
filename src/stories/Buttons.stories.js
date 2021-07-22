import React from "react";
import Buttons from "../components/buttons";

export default {
  title: "Buttons",
  component: Buttons,
};

const Template = (args) => <Buttons {...args} />;

export const PrimaryButtonsPage = Template.bind({});
PrimaryButtonsPage.storyName = "Sim-Não-Talvez";
PrimaryButtonsPage.args = {
  options: ["Sim", "Não", "Talvez"],
};
