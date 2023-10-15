import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface wallet {
  nftExist: boolean;
  walletName: string;
  nftList: [];
}

// 페이지 변경시 상태 관리 유지
const { persistAtom } = recoilPersist();

export const WalletInfo = atom<wallet>({
  key: 'WalletInfo',
  default: {
    nftExist: false,
    walletName: '',
    nftList: [],
  },
  effects_UNSTABLE: [persistAtom],
});
