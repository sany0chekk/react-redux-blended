import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setEditTodo, updateTodo } from 'reduxTodo/todoSlice';
import { selectEditedTodo } from 'reduxTodo/selectors';

export const EditForm = () => {
  const dispatch = useDispatch();
  const todo = useSelector(selectEditedTodo);
  const handleCancel = () => {
    dispatch(setEditTodo(null));
  };
  const handleSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.text.value;
    dispatch(updateTodo(value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
