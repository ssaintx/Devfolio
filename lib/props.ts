export interface ProvidersProps {
    children: React.ReactNode;
};

export interface RootLayoutProps {
    children: React.ReactNode;
};

export interface LanguageSwitcherSelectProps {
    defaultValue: string;
    items: Array<{ value: string; label: string, icon: string }>;
};