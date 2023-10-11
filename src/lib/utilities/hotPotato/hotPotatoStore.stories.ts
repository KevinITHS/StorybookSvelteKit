import type { Meta, StoryObj } from "@storybook/svelte"
import hotPotatoStory from "./hotPotatoStory.svelte"

const meta = {
    title: "Utilities/hotPotatoStore",
    component: hotPotatoStory,
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
} satisfies Meta<hotPotatoStory>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { story: "Default" },
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const PassPotato: Story = {
    args: { story: "PassPotato" },
    name: ".passPotato() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const ResetGame: Story = {
    args: { story: "ResetGame" },
    name: ".resetGame() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const SetPlayerNames: Story = {
    args: { story: "SetPlayerNames" },
    name: ".setPlayerNames() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}
