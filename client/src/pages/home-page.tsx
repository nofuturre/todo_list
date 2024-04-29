import { useState } from "react";
import {
  Button,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { CreateTodoModal } from "../components/modules/CreateTodoModal";
import { MainLayout } from "../layout/MainLayout";
import { useGetAllTodos } from "../api/todo.api";
import { Todo } from "../types/todo.types";

export const HomePage = () => {
  const { data, isLoading } = useGetAllTodos();
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);

  return (
    <>
      <CreateTodoModal
        isOpen={isCreateModelOpen}
        onClose={() => setIsCreateModelOpen(false)}
      />
      <MainLayout>
        <Button onClick={() => setIsCreateModelOpen(true)}>Add new todo</Button>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="mt-4">
            <TodosTable todos={data ?? []} />
          </div>
        )}
      </MainLayout>
    </>
  );
};

const TodosTable = ({ todos }: { todos: Todo[] }) => {
  return (
    <Table aria-label="Todos table">
      <TableHeader>
        <TableColumn key={"title"}>Title</TableColumn>
        <TableColumn key={"description"}>Description</TableColumn>
        <TableColumn key={"status"}>Status</TableColumn>
      </TableHeader>
      <TableBody>
        {todos.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>
              <Switch defaultSelected={row.completed} aria-label="Completed" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
