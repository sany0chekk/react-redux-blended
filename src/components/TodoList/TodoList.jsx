import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilteredTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

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
