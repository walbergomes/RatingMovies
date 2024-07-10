import { createContext, useContext } from "react";

export const authContext = createContext({});

function AuthProvider({ children }) {
  return (
    <authContext.Provider
      value={{ name: "walber gomes", email: "walbergomes@email.com" }}
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
