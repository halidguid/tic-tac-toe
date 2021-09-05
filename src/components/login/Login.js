import Form from "./Form";

const Login = ({ name1, setName1, name2, setName2, setLogged }) => {
  return (
    <div className="login">
      <Form
        name1={name1}
        setName1={setName1}
        name2={name2}
        setName2={setName2}
        setLogged={setLogged}
      />
    </div>
  );
};

export default Login;
