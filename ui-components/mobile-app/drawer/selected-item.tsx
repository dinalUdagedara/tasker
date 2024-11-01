"use client";
import useStore from "@/store/state";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { CommentType } from "@/lib/types";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelctedItem = () => {
  const selectedItem = useStore((state) => state.selectedItem);
  const setItemSelected = useStore((state) => state.setItemSelected);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [assignees, setAssignees] = useState<string[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const editTask = useMutation(api.tasks.editTask);

  function handleEditTask() {
    if (selectedItem?._id) {
      editTask({
        title,
        assignees,
        comments,
        content,
        priority,
        status,
        taskID: selectedItem?._id,
      });
    }
  }

  useEffect(() => {
    if (selectedItem) {
      setTitle(selectedItem.title);
      setContent(selectedItem.content);
      setAssignees(selectedItem.assignees);
      setStatus(selectedItem.status);
      setPriority(selectedItem.priority);
      setComments(selectedItem.comments);
    }
  }, [selectedItem]);

  return (
    <div className="flex flex-col h-full w-full gap-4">
      {/* Editable Title */}
      <Input
        className="font-sans text-3xl font-bold border-0 focus-visible:ring-0  focus-visible:ring-offset-0"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      {/* Editable Content */}
      <div className="flex gap-8 mt-10">
        <span className="font-sans">Summary:</span>
        <Textarea
          className="font-sans border-0 focus-visible:ring-0  focus-visible:ring-offset-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
      </div>

      {/* Editable Assignees */}
      <div className="flex gap-8">
        <span className="font-sans">Assignee:</span>
        <Input
          className="font-sans border-0 focus-visible:ring-0  focus-visible:ring-offset-0"
          value={assignees.join(", ")}
          onChange={(e) =>
            setAssignees(
              e.target.value.split(", ").map((assignee) => assignee.trim())
            )
          }
          placeholder="Add assignees (comma-separated)"
        />
      </div>

      {/* Editable Status */}
      <div className="flex gap-8">
        <span className="font-sans">Status:</span>

        <Select onValueChange={(value) => setStatus(value)} value={status}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="border-0" placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="border-0">
            <SelectGroup>
              {/* <SelectLabel>Status</SelectLabel> */}
              <SelectItem value="to_do">To Do</SelectItem>
              <SelectItem value="on_progress">On Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Editable Priority */}
      <div className="flex gap-8">
        <span className="font-sans">Priority:</span>

        <Select onValueChange={(value) => setPriority(value)} value={priority}>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="border-0" />
          </SelectTrigger>
          <SelectContent className="border-0">
            <SelectGroup>
              {/* <SelectLabel>Status</SelectLabel> */}
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Comment Input */}
      <div>
        <Input
          className="border-0 focus-visible:ring-0  focus-visible:ring-offset-0"
          type="text"
          placeholder="Add a comment..."
        />
      </div>

      <Separator />

      {/* Action Buttons */}
      <div className="mt-20 mr-5 flex justify-end gap-5">
        <Button
          onClick={() => {
            handleEditTask();
          }}
        >
          Edit
        </Button>
        <Button
          variant={"destructive"}
          onClick={() => {
            setItemSelected(false);
          }}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default SelctedItem;
