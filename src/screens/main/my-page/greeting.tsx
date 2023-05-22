import styles from './greeting.module.css';

export default function Greeting() {
  return (
    <div className={styles.container} >
      <div className={styles.upper} >
        박상연 님
      </div>
      <div className={styles.lower} >
        안녕하세요. 쇼핑하기 좋은 날이네요!
      </div>
      <div className={styles.button} >
        내 정보관리
      </div>
    </div>
  )
}