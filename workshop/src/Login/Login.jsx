import React from 'react';
import * as yup from 'yup';
import '../shared/styles/LoginAndRegister.css';
import { StoreContext } from '../Store/Store';
import { useHistory } from 'react-router-dom';
import { login } from '../Store/actions';

import { useFormControl, getValidationsRunnerForSchema } from '../shared/hocs/withForm';

const validations = {
  username: yup.string()
    .required('Username is required')
    .min(4, 'Username should be more than 4 chars'),

  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be more than 6 chars')
}

const schema = yup.object().shape(validations);

const validationsRunner = getValidationsRunnerForSchema(schema);

const Login = () => {
  const { state, dispatch } = React.useContext(StoreContext);
  
  const usernameFormControl = useFormControl('', validations.username);
  const passwordFormControl = useFormControl('', validations.password);

 
  const submitHandler = React.useCallback(() => {
    validationsRunner({
      username: usernameFormControl.value,
      password: passwordFormControl.value
    }).then(data => {
      dispatch(login(data));
    }).catch(errors => {
      if (errors.username) { usernameFormControl.setErrors(errors.username); }
      if (errors.password) { passwordFormControl.setErrors(errors.password); }
    })
  }, [usernameFormControl, passwordFormControl, dispatch]);

  return <form className="Login">
    <div className="form-control">
      <label>Username</label>
      <input type="text" onChange={usernameFormControl.changeHandler} />
    </div>
    {usernameFormControl.errors && usernameFormControl.errors[0]}
    <div className="form-control">
      <label>Password</label>
      <input type="password" onChange={passwordFormControl.changeHandler} />
    </div>
    {passwordFormControl.errors && passwordFormControl.errors[0]}
    {state.error && state.error}
    <div className="form-control">
      <button type="button" onClick={submitHandler}>Login</button>
    </div>
  </form>;
}

export default Login;
 