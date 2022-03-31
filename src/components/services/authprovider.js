import { Signin} from "./auth";

let AuthContext = React.createContext(null);
function AuthProvider({ children }) {
    return <AuthContext.Provider const value={{Signin}}>{children}</AuthContext.Provider>;
} 