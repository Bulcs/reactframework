import React from "react";
import Voting from "../components/voting";

export default {
  title: "Voting",
  component: Voting,
  argTypes: {
    state: {
      options: ["open", "close"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Voting {...args} />;

export const PrimaryVoting = Template.bind({});
PrimaryVoting.storyName = "Votacao";
PrimaryVoting.args = {
  title: "Votação",
  state: "open",
  votes: [
    { option: "Sim", count: 0 },
    { option: "Não", count: 0 },
    { option: "Talvez", count: 0 },
  ],
};

export const SecondaryVoting = Template.bind({});
SecondaryVoting.storyName = "Resultado Votação";
SecondaryVoting.args = {
  title: "Resultado Votação",
  state: "close",
  votes: [
    { option: "Sim", count: 1 },
    { option: "Não", count: 1 },
    { option: "Talvez", count: 1 },
  ],
};
