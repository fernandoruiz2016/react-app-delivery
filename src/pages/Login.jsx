import { LogoChaskys } from "../components/LogoChaskys"

export const Login = () => {
    return (
    <>
      <LogoChaskys descripcion={"Delivery app"}/>
      <section className='inputs-form'>
        <input type="text" name="user" id="user" placeholder='Usuario' />
        <input type="password" name="password" id="password" placeholder='Contraseña' />
      </section>
      <section className='btn-login'>
        <span>¿Olvidaste tu contraseña?</span>
        <button className='btn login'>Iniciar Sesión</button>
        <span>o</span>
        <button className='btn create'>Create una cuenta</button>
      </section>
    </>
  )
}