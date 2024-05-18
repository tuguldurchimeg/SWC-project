import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthProviderProps {
    children: React.ReactNode;
  }
  
  interface LoginData {
    username: string;
    password: string;
  }
  
  interface AuthContextType {
    token: string;
    user: any;
    loginAction: (data: LoginData) => Promise<void>;
    logOut: () => void;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const loginAction = async (data: LoginData): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:5000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log(res)
      if (res) {
        setUser(res.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/Home");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = (): void => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};