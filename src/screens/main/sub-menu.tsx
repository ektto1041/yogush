import SubMenuItem from './sub-menu-item';
import styles from './sub-menu.module.css';
import { mdiWeb } from '@mdi/js';
import { mdiBookmarkCheckOutline } from '@mdi/js';
import { mdiWeatherSunny } from '@mdi/js';
import { mdiNumeric1CircleOutline } from '@mdi/js';
import { mdiTruckDeliveryOutline } from '@mdi/js';
import { mdiYoutubeTv } from '@mdi/js';
import { mdiClockStarFourPointsOutline } from '@mdi/js';
import { mdiHandHeartOutline } from '@mdi/js';
import { mdiAccountGroupOutline } from '@mdi/js';
import { mdiClockOutline } from '@mdi/js';
import { mdiAirplane } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';

type SubMenuProps = {
  type: number;
};

export type SubMeunItemType = {
  menu: string;
  icon: string;
};

const subMenus: SubMeunItemType[][] = [
  [
    {menu: '매일혜택', icon: mdiClockOutline},
    {menu: '항공권', icon: mdiAirplane},
    {menu: 'Y쿠폰', icon: mdiTicketPercentOutline},
    {menu: '해외직구', icon: mdiWeb},
    {menu: '구독상품', icon: mdiBookmarkCheckOutline},
    {menu: '신선작물', icon: mdiWeatherSunny},
  ],
  [
    {menu: '단 하루', icon: mdiNumeric1CircleOutline},
    {menu: '빠른배송', icon: mdiTruckDeliveryOutline},
    {menu: 'Yplay', icon: mdiYoutubeTv},
    {menu: '정기구매', icon: mdiClockStarFourPointsOutline},
    {menu: '대리구매', icon: mdiHandHeartOutline},
    {menu: '공동구매', icon: mdiAccountGroupOutline},
  ]
];

export default function SubMenu({
  type
}: SubMenuProps) {
  return (
    <>
      <div className={styles.container} >
        {subMenus[type].map(m => (
          <SubMenuItem key={m.menu} menu={m} />
        ))}
      </div>
    </>
  )
}