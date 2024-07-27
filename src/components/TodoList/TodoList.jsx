import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <Grid>
        {todos.map((todo, index) => {
          return (
            <GridItem key={todo.id}>
              <Todo todo={todo} counter={index + 1} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
