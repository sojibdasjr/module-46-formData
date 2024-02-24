import { useState } from "react";

const AwesomeForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmitAwe = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be   6 charchter or longer ");
    } else {
      setError("");
    }
    console.log(name, email, password);
  };
  const handelNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmitAwe}>
      <input
        onChange={handelNameChange}
        type="text"
        name="name"
        placeholder="name"
      />{" "}
      <br />
      <input
        onChange={handleEmailChange}
        type="email"
        name="email"
        placeholder="email"
      />{" "}
      <br />
      <input
        onChange={handlePasswordChange}
        type="password"
        name="password"
        placeholder="password"
        required
      />{" "}
      <br />
      <input type="submit" name="submit" />
      {error && <div>{error}</div>}
    </form>
  );
};

export default AwesomeForm;
