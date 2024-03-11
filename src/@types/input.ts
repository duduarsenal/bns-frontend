export interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    icon?: React.ReactNode;
    error?: string;
    loading?: boolean;
    tela?: string;
    select?: number | boolean;
    setSelect?: (bool: boolean) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    setValue: (value: string) => void;
}