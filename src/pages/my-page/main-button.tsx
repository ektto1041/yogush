import { MyPageMainButtonType } from '@/data/data';
import styles from './main-button.module.css';
import Icon from '@mdi/react';

type MainButtonProps = {
  button: MyPageMainButtonType;
}

export default function MainButton({
  button,
}: MainButtonProps) {
  return (
    <div className={styles.container} >
      <div className={styles.icon} >
        <Icon path={button.icon} size='100%' />
      </div>
      <div className={styles.name} >
        {button.name}
      </div>
    </div>
  )
}