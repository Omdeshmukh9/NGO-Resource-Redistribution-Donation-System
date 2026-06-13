import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MOCK_USERS } from "../../constants/mockUsers";
import { ROLES } from "../../constants/roles";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = MOCK_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      alert("Invalid Credentials");
      return;
    }

    login({
      email: user.email,
      role: user.role,
    });

    switch (user.role) {
      case ROLES.ADMIN:
        navigate("/admin/dashboard");
        break;

      case ROLES.NGO:
        navigate("/ngo/dashboard");
        break;

      case ROLES.DONOR:
        navigate("/donor/dashboard");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
