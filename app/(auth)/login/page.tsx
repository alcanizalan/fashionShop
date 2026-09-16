
import { login } from '@/services/auth'

export default function LoginPage() {
    return(
        <div>
            <h1>Login Page</h1>
            <form action={login}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="tu contraseña" required/>
                </div>
                <button type="submit">Login</button>
                <p>Don't have an account? <a href="/register">Register here</a></p>
            </form>
        </div>
    )
}