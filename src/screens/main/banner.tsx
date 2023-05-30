import styles from './banner.module.css';

export default function Banner() {
  return (
    <>  
      <div className={styles.container}>
        <div className={styles.content}>
          <img src='https://img1.tmon.kr/cdn4/viewAdmin/image/8266/6150/M_HomeBig_C-type_03_2_9ee53_6d99f.jpg' alt='' />
        </div>
      </div>
    </>
  )
}