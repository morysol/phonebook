import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = e => {
    e.preventDefault();
    //
    const email = e.target.form.elements.email.value;
    const password = e.target.form.elements.password.value;

    dispatch(userLogin({ email, password }));
  };
  return (
    <form>
      <input type="text" id="email" name="email"></input>
      <input type="password" id="password" name="password"></input>
      <button type="summit" onClick={handleOnSubmit}>
        log
      </button>
    </form>
  );
};
