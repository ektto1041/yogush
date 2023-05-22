import { myPageMainButtons } from '@/data/data';
import styles from './main-button-box.module.css';
import MainButton from './main-button';

export default function MainButtonBox() {
  return (
    <div className={styles.container}>
      {myPageMainButtons.map(b => (
        <MainButton key={b.name} button={b} />
      ))}
    </div>
  )
}