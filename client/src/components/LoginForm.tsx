import React, {FC, useState} from "react";

const LoginFrom: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
      <button>Login</button>
    </>
  );
}

export default LoginFrom;
