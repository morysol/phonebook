import { useDispatch } from 'react-redux';
import { userSignup } from 'redux/operations';

export const Registration = () => {
  //
  const dispatch = useDispatch();
  //
  const handleOnSubmit = e => {
    e.preventDefault();
    // console.log(e.target.form.elements.name.value);
    // console.log(e.target.form.elements.email.value);
    // console.log(e.target.form.elements.pass.value);
    const name = e.target.form.elements.name.value;
    const email = e.target.form.elements.email.value;
    const password = e.target.form.elements.password.value;
    // const { name, password } = e.target.form.elements;
    // const { name, password } = e.target.form.elements;
    // dispatch(userSignup({ name, email, password }));
    // console.log({ name, email, password });
    // console.log(JSON.stringify({ name, email, password }));

    dispatch(userSignup({ name, email, password }));
    // dispatch(userSignup(JSON.stringify({ name, email, password })));
  };

  return (
    <form>
      <input type="text" id="name" name="name"></input>
      <input type="email" id="email" name="email"></input>
      <input type="password" id="password" name="password"></input>
      <button type="summit" onClick={handleOnSubmit}>
        reg
      </button>
    </form>
  );
};
