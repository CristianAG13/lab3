import { useState, useRef } from 'react';
import Home from './Home';
import AnonymusUserComponents from './AnonymusUserComponents';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        // Validación de campos vacíos
        if (!email || !password) {
            setError('Por favor, complete todos los campos');
            return;
        }

        // Validación de credenciales
        if (email === 'admin' && password === '123456') {
            setUser({ email }); // Guardar el correo del usuario
            setError('');
            alert('Bienvenido');
        } else {
            setError('Datos incorrectos');
        }
    };

    const handleLogout = () => {
        setUser(null);
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
                    <button onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}
        </>
    );
}