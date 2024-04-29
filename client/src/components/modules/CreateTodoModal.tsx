import { Modal, ModalContent, ModalHeader } from "@nextui-org/react";
import { TodoForm } from "../../forms/todo-form/TodoForm";
import { TodoFormSchema } from "../../forms/todo-form/todo-form.schema";
import { createTodo } from "../../api/todo.api";

type CreateTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateTodoModal = ({ isOpen, onClose }: CreateTodoModalProps) => {
  const onSubmit = async (data: TodoFormSchema) => {
    try {
      await createTodo(data);
      onClose();
    } catch (error) {
      alert("Error creating todo");
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent className="p-4">
        <ModalHeader>Create new todo</ModalHeader>
        <TodoForm onSubmit={onSubmit} />
      </ModalContent>
    </Modal>
  );
};
