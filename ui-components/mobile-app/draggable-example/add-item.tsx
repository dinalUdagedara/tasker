import { FC, useState } from "react";
import { DraggableItemType } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Importing from ShadCN
import { Textarea } from "@/components/ui/textarea";

interface AddItemFormProps {
  onAddItem: (item: DraggableItemType) => void;
  onClose: () => void; // Prop to handle closing the form
  showForm: boolean; // Prop to control dialog visibility
}

const AddItemForm: FC<AddItemFormProps> = ({
  onAddItem,
  onClose,
  showForm,
}) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem: DraggableItemType = {
      id: Date.now(),
      title,
      priority,
      contentTitle,
      content,
      comments: [],
      files: [],
      assignees: [],
    };

    onAddItem(newItem);
    onClose(); // Close the dialog after adding an item

    // Clear the form fields
    setTitle("");
    setPriority("Medium");
    setContentTitle("");
    setContent("");
  };

  return (
    <div>
      <Dialog open={showForm} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center py-2">Add New Item</DialogTitle>
            <DialogDescription className="text-center">
              Fill out the details and click "Add Item" to save.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            {/* <Label
              htmlFor="title"
              className="text-center text-md font-sans font-semibold"
            >
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            /> */}
            <Label
              htmlFor="contentTitle"
              className="text-left text-md font-sans font-semibold"
            >
              Content Title
            </Label>
            <Input
              id="contentTitle"
              value={contentTitle}
              onChange={(e) => setContentTitle(e.target.value)}
              required
            />
            <Label
              htmlFor="priority"
              className="text-left text-md font-sans font-semibold"
            >
              Priority
            </Label>
            <Select
              onValueChange={(value) => setPriority(value)}
              value={priority}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Label
              htmlFor="content"
              className="text-left text-md font-sans font-semibold"
            >
              Content Description
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <DialogFooter>
              <Button type="submit">Add Item</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddItemForm;
