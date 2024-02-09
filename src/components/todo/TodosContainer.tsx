import TodosCard from "./TodosCard";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import { useAppSelector } from "@/redux/hooks";
import { useGetTodoQuery } from "@/redux/api/api";

const TodosContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  const { data, isLoading, isError } = useGetTodoQuery(undefined);

  console.log(
    "Is Data  => ",
    data,
    "loading => ",
    isLoading,
    "Error => ",
    isError
  );
  if (isLoading) {
    return <p>loading...........................</p>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mb-10 mx-1">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full  rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-5">
          {todos.length > 0 ? (
            todos.map((item) => <TodosCard key={item.id} {...item}></TodosCard>)
          ) : (
            <div className="bg-white p-5 rounded-md text-2xl font-semibold flex justify-center items-center">
              <p>There Is No Task Pending...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodosContainer;
