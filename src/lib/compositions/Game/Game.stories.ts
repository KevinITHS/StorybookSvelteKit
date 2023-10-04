import type { Meta, StoryObj } from "@storybook/svelte"
import Game from "./Game.svelte"

const meta = {
    title: "Compositions/Game",
    component: Game,
    argTypes: {},
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
} satisfies Meta<Game>

export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: "Default/Placement Story",
    args: { story: "Placement" },
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const Story2: Story = {
    name: "Start/Restart Story",
    args: { story: "StartRestart" },
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}

export const Story3: Story = {
    name: "Responsive Story",
    args: { story: "Responsive" },
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
}
