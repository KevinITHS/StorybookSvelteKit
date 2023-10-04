import type { Meta, StoryObj } from "@storybook/svelte"
import Player from "./Player.svelte"

const meta = {
    title: "Components/Player",
    component: Player,
    argTypes: {
        alive: { control: "boolean" },
    },
    parameters: {
        design: {
            type: "figma",
            url: "",
        },
    },
} satisfies Meta<Player>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: { story: "Default" },
    name: "Default Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-419&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A419",
        },
    },
}
export const Person: Story = {
    args: { story: "Person" },
    name: "Person Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-613&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A613",
        },
    },
}

export const Styling: Story = {
    args: { story: "Styling" },
    name: "Person Story 2 / Styling Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-632&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A620",
        },
    },
}

export const Dead: Story = {
    args: { alive: true, story: "Dead" },
    name: "Dead Player Story",
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/proto/3SSRNqJ5QqPoz9HSWsKdR9/Hot-potato?type=design&node-id=15-432&t=sHpi22t5hRmUPo1J-0&scaling=min-zoom&page-id=11%3A17&starting-point-node-id=15%3A432",
        },
    },
}
