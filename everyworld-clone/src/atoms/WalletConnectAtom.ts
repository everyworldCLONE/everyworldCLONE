import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// 페이지 변경시 상태 관리 유지
const { persistAtom } = recoilPersist();

export const WalletConnect = atom<boolean>({
  key: 'WalletConnect',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
