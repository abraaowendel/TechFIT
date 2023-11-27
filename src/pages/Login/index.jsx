import { useState } from "react";
import * as C from "./styled";

function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <C.Container>
            <C.Box>
                <C.Title>LOGIN</C.Title>
                <C.Form action="">
                    <C.Input type="text" placeholder="E-mail"/>
                    <C.Input type="text" placeholder="Senha"/>
                    <C.Button>LOGIN</C.Button>
                </C.Form>
            </C.Box>
        </C.Container>
    );
}

export default Login;