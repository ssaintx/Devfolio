import { useLocale } from 'next-intl';
import { LanguageSwitcherSelect } from './LanguageSwitcherSelect';

export const LanguageSwitcher = () => {
    const locale = useLocale();

    return (
        <LanguageSwitcherSelect
            defaultValue={locale}
            items={[
                {
                    value: 'uz',
                    label: "O'zbekcha",
                    icon: '/icons/uz.svg',
                },
                {
                    value: 'ru',
                    label: "Русский",
                    icon: '/icons/ru.svg',
                },
                {
                    value: 'en',
                    label: "English",
                    icon: '/icons/en.svg',
                }
            ]}
        />
    );
};