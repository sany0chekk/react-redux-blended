import {
  Section,
  Container,
  Header,
  Form,
  TodoList,
  Filter,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { selectEditedTodo } from 'reduxTodo/selectors';

export const App = () => {
  const isEdit = useSelector(selectEditedTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
