export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    options: Array<string>;
    label: string;
    item: string; 
    setItem: (string: string) => void;
    resetSelect: boolean;
    theme: string;
    isAbsolute: boolean;
    error?: string | boolean;
}