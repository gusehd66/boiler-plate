import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../_actions/user_action";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useNavigate();
  const dispatch = useDispatch();

  const onEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onNameChange = (event) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    const body = {
      email,
      password,
      name,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        history("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailChange} />

        <label>Name</label>
        <input type="text" value={name} onChange={onNameChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordChange} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default RegisterPage;
