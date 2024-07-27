import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { filterByName } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleSearch = event => {
    dispatch(filterByName(event.target.value));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleSearch}
    />
  );
};
