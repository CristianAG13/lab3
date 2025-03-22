import { useState } from 'react';

export default function useLogin() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const login = (email, password) => {
        // Validación de campos vacíos
        if (!email || !password) {
            setError('Por favor, complete todos los campos');
            return false;
        }

        // Validación de credenciales
        if (email === 'admin' && password === '123456') {
            setUser({ email }); // Guardar el correo del usuario
            setError('');
            alert('Bienvenido');
            return true;
        } else {
            setError('Datos incorrectos');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, error, login, logout };
}
