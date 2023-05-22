import Icon from '@mdi/react';
import styles from './status.module.css';

export type StatusProps = {
  icon: string;
  name: string;
  number: number;
};

export default function Status({
  icon,
  name,
  number,
}: StatusProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.icon}${number > 0 ? ` ${styles.active}` : ''}`} >
        <Icon path={icon} size='100%' />
      </div>
      <div className={`${styles.name}${number > 0 ? ` ${styles.active}` : ''}`} >
        {`${name} ${number}`}
      </div>
    </div>
  );
};