import { useRef } from 'react';
import useLogin from '../Hooks/useLogin';
import Home from './Home';
import AnonymusUserComponents from './AnonymusUserComponents';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef('');
    const { user, error, login, logout } = useLogin();

    const handleLogin = () => {
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        login(email, password);
    };

    return (
        <>
            <h1>Login</h1>
            {!user ? (
                <div>
                    <AnonymusUserComponents />
                    <input type="email" placeholder="Correo" ref={emailRef} /> <br />
                    <input type="password" placeholder="Contraseña" ref={passwordRef} /> <br />
                    <button onClick={handleLogin}>Ingresar</button>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            ) : (
                <div>
                    <Home email={user.email} />
                    <button onClick={logout}>Cerrar sesión</button>
                </div>
            )}
        </>
    );
}