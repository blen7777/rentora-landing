'use client';

import { useLanguage } from './LanguageProvider';
import { translations, TranslationKey } from '@/lib/translations';

interface TransProps {
  k: TranslationKey;
  className?: string;
}

export function Trans({ k, className }: TransProps) {
  const { language } = useLanguage();
  return <span className={className}>{translations[language][k]}</span>;
}
