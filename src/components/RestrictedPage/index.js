import { useState } from "react";

function RestrictedPage({ userIsLoggedIn, userName }) {
  const [isLoggedIn, setIsLoggedIn] = useState(userIsLoggedIn);
  const [user, setUser] = useState(userName);

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn === true ? (
        <div>
          <div>Bem vindo: {user}!</div>
          <button onClick={Logout}>sair</button>
        </div>
      ) : (
        <div>
          <div>Você não pode acessar essa página.</div>
          <button onClick={Login}>Entrar</button>
        </div>
      )}
    </div>
  );
}

export default RestrictedPage;
