import React, {FC, useState} from "react";
import { useContext } from "react";
import { Context } from "..";

const LoginFrom: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button onClick={() => store.login(email, password)}>Login</button>
    </>
  );
}

export default LoginFrom;
