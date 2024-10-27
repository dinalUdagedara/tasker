export type DraggableItemType = {
  id: number;
  content: string;
  title: string;
  priority: string;
  contentTitle: string;
  comments: string[];
  files: string[];
  assignees: string[];
};

// Define initial container items
export const initialContainers = {
  container1: [{ id: 1, content: "Item 1" }],
  container2: [{ id: 3, content: "Item 3" }],
  container3: [{ id: 4, content: "Item 4" }],
};
export const initialContainerss = {
  container1: [
    {
      id: 1,
      title: "To Do",
      priority: "Medium",
      contentTitle: "Competitive Analysis",
      content: "Analyze competitor products to understand market positioning.",
      comments: ["", ""],
      files: ["", "", "", ""],
      assignees: ["", ""],
    },
    {
      id: 2,
      title: "To Do",
      priority: "High",
      contentTitle: "Wireframe Design",
      content: "Create wireframes for the main user flows.",
      comments: ["", "", "", "", "", "", ""],
      files: ["", ""],
      assignees: ["", ""],
    },
  ],
  container2: [
    {
      id: 3,
      title: "On Progress",
      priority: "Low",
      contentTitle: "Content Strategy",
      content: "Develop a content strategy to align with brand goals.",
      comments: ["", ""],
      files: ["", ""],
      assignees: [],
    },
    {
      id: 4,
      title: "On Progress",
      priority: "Medium",
      contentTitle: "Prototype Creation",
      content: "Build a prototype to demonstrate user interactions.",
      comments: ["", "", ""],
      files: ["", ""],
      assignees: ["", ""],
    },
  ],
  container3: [
    {
      id: 5,
      title: "Done",
      priority: "High",
      contentTitle: "Usability Testing",
      content: "Conduct usability tests to gather user feedback.",
      comments: ["", "", "", "", ""],
      files: ["", "", ""],
      assignees: ["", ""],
    },
    {
      id: 6,
      title: "Done",
      priority: "Low",
      contentTitle: "Design Mockups",
      content: "Prepare design mockups for initial client review.",
      comments: [],
      files: ["", ""],
      assignees: [],
    },
  ],
};
