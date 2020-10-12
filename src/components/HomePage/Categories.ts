type alignType = "left" | "middle-left" | "middle" | "middle-right" | "right";

interface CategoryType {
  title: string;
  description: string;
  pageUrl: string;
  imageUrl: string;
  align: alignType;
}

export const Categories: Array<CategoryType> = [
  {
    title: "Mali sumarak i more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "middle-left"
  },
  {
    title: "Nas kucerak i basta",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "/house",
    imageUrl: "fixme",
    align: "middle"
  },
  {
    title: "Skola",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "/school",
    imageUrl: "fixme",
    align: "left"
  },
  {
    title: "Mali sumarak i more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "middle-right"
  },
  {
    title: "Nas kucerak i basta",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "right"
  },
  {
    title: "Skola",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "middle"
  },
  {
    title: "Mali sumarak i more",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "middle-left"
  },
  {
    title: "Nas kucerak i basta",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "forest",
    imageUrl: "/fixme",
    align: "middle"
  },
  {
    title: "Skola",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    pageUrl: "/forest",
    imageUrl: "fixme",
    align: "left"
  }
];
