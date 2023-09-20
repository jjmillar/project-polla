import classes from '@/app/styles.module.scss'

export default function Home () {
  return (
    <section className={classes.card}>
      <input type='text' id='user' name='user' placeholder='nombre de usuario' />
      <input type='password' id='password' name='password' placeholder='contraseña' />
      <button type='button'>ENTRAR</button>
    </section>
  )
}
