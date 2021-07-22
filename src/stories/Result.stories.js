import React from "react";
import Result from "../components/result";

export default {
  title: "Result",
  component: Result,
};

const Template = (args) => <Result {...args} />;

export const PrimaryResultPage = Template.bind({});
PrimaryResultPage.storyName = "Votação 1";
PrimaryResultPage.args = {
  votes: [
    { option: "Sim", count: 1 },
    { option: "Não", count: 1 },
    { option: "Talvez", count: 1 },
  ],
};
