import classes from '@/app/styles.module.scss'

export default function Home () {
  return (
    <section className={classes.card}>
      <form className={classes.form}>
        <input className={classes.input} type='text' id='user' name='user' placeholder='nombre de usuario' />
        <input className={classes.input} type='password' id='password' name='password' placeholder='contraseña' />
        <button className={classes.button} type='submit'>ENTRAR</button>
      </form>
    </section>
  )
}
