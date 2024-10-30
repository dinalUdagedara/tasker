import { Id } from "@/convex/_generated/dataModel";

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

export const userIDSample = "jh733jcdtpa81eqk6hx3m6rht173et4k";

// Assuming you have defined your task model somewhere
export type DraggableItemTypeNew = {
  _id: Id<"tasks">;
  _creationTime: number;
  title: string;
  content: string;
  status: string; // container1, container2, or container3
  priority: string;
  assignees: string[];
  comments: {
    content: string;
    author: string;
    timestamp: string;
  }[];
  files: any[]; // Specify a more accurate type if possible
  creator: Id<"users">;
};

export const initialContainerss = {
  toDo_Container: [
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
  onProgress_Container: [
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
  done_Container: [
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
