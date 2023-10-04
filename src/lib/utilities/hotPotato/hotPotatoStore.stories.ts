import type { Meta, StoryObj } from "@storybook/svelte"
import hotPotatoStory from "./hotPotatoStory.svelte"

const meta: Meta = {
    title: "Utilities/hotPotatoStore",
    component: hotPotatoStory,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const PassPotato: Story = {
    args: {},
    name: ".passPotato() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const ResetGame: Story = {
    args: {},
    name: ".resetGame() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const SetPlayerNames: Story = {
    args: {},
    name: ".setPlayerNames() Story",
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}
