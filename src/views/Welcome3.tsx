import s from './Welcome.module.scss'
import { Third } from '../components/welcome/Third'
import { ThirdActions } from '../components/welcome/ThirdActions'
import { Header } from '../components/welcome/Header'

export const Welcome3 = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <Header />
      </header>
      <main className={s.main}>
        <Third />
      </main>
      <footer>
        <ThirdActions />
      </footer>
    </div>
  )
}
