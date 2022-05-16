import SvgIcon from '../components/SvgIcon'
import s from './StartPage.module.scss'
import { Button } from '../components/Button'
import { Center } from '../components/Center'
import { FloatButton } from '../components/FloatButton'

export const StartPage = () => {
  return (
    <div>
      <Center className={s.pig_wrapper} direction="horizontal">
        <SvgIcon name="pig" className={s.pig} />
      </Center>
      <div className={s.button_wrapper}>
        <Button className={s.button} text="开始记账" />
      </div>
      <FloatButton iconName="add" />
    </div>
  )
}
