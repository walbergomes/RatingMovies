import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const authContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@ratingmovies:user", JSON.stringify(user));
      localStorage.setItem("@ratingmovies:token", token);

      api.defaults.headers.common["Authorization"] = `Baerer ${token}`;
      setData({ user, token });

      // console.log({user, token})
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi pissível entrar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@ratingmovies:token");
    localStorage.removeItem("@ratingmovies:user");

    setData({});
  }
  
  async function updateProfile({ user }) {
    try {
      const { password, old_password, ...userData } = user
      // console.log(user)

      // const userData = {
      //   name: user.name,
      //   email: user.email
      // }
      
      await api.put("/users", userData)
      localStorage.setItem("@ratingmovies:user", JSON.stringify(userData))

      setData({ user: userData, token: data.token })
      alert("Perfil atualizado!")

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi pissível atualizar o perfil");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@ratingmovies:token");
    const user = localStorage.getItem("@ratingmovies:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Baerer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        user: data.user,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);

  return context;
}

export { AuthProvider, useAuth };
