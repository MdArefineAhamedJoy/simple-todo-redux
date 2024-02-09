import TodosContainer from "@/components/todo/TodosContainer";
import Containers from "@/components/todo/ui/Containers";

const todos = () => {
  return (
    <Containers>
      <h1 className="text-3xl font-semibold text-center my-10">hello Todos</h1>
      <TodosContainer></TodosContainer>
    </Containers>
  );
};

export default todos;
