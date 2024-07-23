import {useState} from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const login = {username, password};

        const resopnse = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setError(null);
            console.log('Login submit success'. json);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>

            <label>Username</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Password</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Login</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default LoginForm
