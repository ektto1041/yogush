
import { ProxyItemType } from '@/screens/main/my-page/proxy/proxy-item';
import { mdiClockOutline } from '@mdi/js';
import { mdiAirplane } from '@mdi/js';
import { mdiTicketPercentOutline } from '@mdi/js';
import { mdiWeb } from '@mdi/js';
import { mdiBookmarkCheckOutline } from '@mdi/js';
import { mdiWeatherSunny } from '@mdi/js';
import { mdiNumeric1CircleOutline } from '@mdi/js';
import { mdiTruckDeliveryOutline } from '@mdi/js';
import { mdiYoutubeTv } from '@mdi/js';
import { mdiClockStarFourPointsOutline } from '@mdi/js';
import { mdiHandHeartOutline } from '@mdi/js';
import { mdiAccountGroupOutline } from '@mdi/js';
import { mdiCreditCardOutline } from '@mdi/js';
import { mdiMessageTextOutline } from '@mdi/js';

export type MyPageMainButtonType = {
  icon: string;
  name: string;
};

export type SubMeunItemType = {
  menu: string;
  icon: string;
};

export type rcItemType = {
  img: string;
  name: string;
  price: string;
  sale: number;
}

export const subMenus: SubMeunItemType[][] = [
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

export const rcItems: rcItemType[] = [
  {img: '/rc_downy.jpeg', name: '[사은품] 다우니 섬유유연제 엑스퍼트 실내 건조 1L 6개 @@@@@@', price: '39,120', sale: 20},
  {img: '/rc_downy.jpeg', name: '[사은품] 다우니 섬유유연제 엑스퍼트 실내 건조 1L 6개 @@@@@@', price: '39,120', sale: 20},
];

export const myPageMainButtons: MyPageMainButtonType[] = [
  {icon: mdiTicketPercentOutline, name: '할인쿠폰'},
  {icon: mdiCreditCardOutline, name: '적립금'},
  {icon: mdiMessageTextOutline, name: '리뷰작성'},
]

export const ProxyItems: ProxyItemType[] = [
  {
    name: '김철수',
    record: '커피 1박스, 두루마리 휴지 1묶음',
    previous: [
      '카누 사무실 커피믹스 미니 마일드 다크 라떼',
      '크리넥스 물에 잘 녹는 에어셀 두루마리휴지 40m 24롤',
    ],
  },
  {
    name: '진영희',
    record: '멸치 1봉지, 참기름 1병',
    previous: [
      '거제도 외포멸치선물세트 패키지(자멸+대멸)',
      '국산참기름 저온압착 참기름 [ 농부플러스 ]',
    ],
  },
  {
    name: '진영희',
    record: '멸치 1봉지, 참기름 1병',
    previous: [
      '거제도 외포멸치선물세트 패키지(자멸+대멸)',
      '국산참기름 저온압착 참기름 [ 농부플러스 ]',
    ],
  },
]