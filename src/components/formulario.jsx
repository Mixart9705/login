import "./formulario.css";
import { useState } from "react";

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleRedirect = async () => {
    window.location.href = "https://react-buscador-two.vercel.app/";
    };

    const handleSumbmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
        setError(true);
        return;
    }

    // Verificar el usuario y contraseña
    if (nombre === "admin" && contraseña === "password") {
        setError(false);
        setUser([nombre]);
      handleRedirect(); // Redirigir si el usuario y contraseña son correctos
    } else {
        setError(true);
    }
    };

    return (
        <section>
        <h1>Login</h1>

        <form className="formulario" onSubmit={handleSumbmit}>
        <input value={nombre} type="text" onChange={(e) => setNombre(e.target.value)} />
        <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
        </form>
        {error && <p>Usuario o contraseña incorrectos</p>}
    </section>
    );
}