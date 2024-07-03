import { createContext ,useState} from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPass, setNewPass] = useState("");

  return (
    <Context.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        pass,
        setPass,
        newEmail,
        setNewEmail,
        newPass,
        setNewPass,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
