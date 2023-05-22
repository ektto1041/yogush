import { rcItems } from '@/data/data';
import styles from './recommendation.module.css';
import RecommendationItem from './rc-item';

export default function Recommendation() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        추천상품
      </div>
      {rcItems.map(r => (
        <RecommendationItem key={r.name} rcItem={r} />
      ))}
    </div>
  );
}