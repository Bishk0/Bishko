import React, {FC, useState} from "react";

const RegistrationFrom: FC = () => {
  const [fullname, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

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
      <button>Register</button>
    </>
  );
}

export default RegistrationFrom;
