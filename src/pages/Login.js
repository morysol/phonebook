import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();
  const handleOnSubmit = e => {
    e.preventDefault();
    //
    const email = e.target.form.elements.email.value.toString();
    const password = e.target.form.elements.password.value.toString();
    // const { name, password } = e.target.form.elements;
    // const { name, password } = e.target.form.elements;
    // dispatch(userSignup({ name, email, password }));
    // console.log({ name, email, password });
    // console.log(JSON.stringify({ name, email, password }));

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
