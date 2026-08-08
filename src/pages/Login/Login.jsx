import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
  return (

    <div>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => login({ username })}>Login</button>
    </div>
  )
}

export default Login