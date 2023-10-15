import { useRecoilState } from 'recoil';
import { LanguagesState } from '../atoms/LanguagesAtom';

const [language, setLanguage] = useRecoilState<string>(LanguagesState);

export const useLanguage = (language: string) => {
  setLanguage(language);

  return language;
};
