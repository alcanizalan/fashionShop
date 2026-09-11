
import { register } from '@/services/auth'

export default function RegisterPage() {
    return(
        <div>
            <h1>Register Page</h1>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="tu nombre" required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="tu@email.com" required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="tu contraseña" required/>
                </div>
                <div>
                    <label htmlFor="repeat-password">Repeat the password</label>
                    <input type="password" id="repeat-password" name="repeat-password" placeholder="repite tu contraseña" required/>
                </div>
                    <button formAction={register} type="submit">Register</button>
            </form>
        </div>
    )
}