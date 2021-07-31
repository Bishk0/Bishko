import React, {FC, useContext, useState} from "react";
import { Context } from "..";

const RegistrationFrom: FC = () => {
  const [fullname, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const { store } = useContext(Context);

  return (
    <>
      <input
        type="text"
        value={fullname}
        onChange={event => setFullName(event.target.value)}
        placeholder="Full Name"
      />
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
      <input
        type="password"
        value={repeatPassword}
        onChange={event => setRepeatPassword(event.target.value)}
        placeholder="Repeat Password"
      />
      <button onClick={() => store.registration(fullname, email, password)}>Register</button>
    </>
  );
}

export default RegistrationFrom;
