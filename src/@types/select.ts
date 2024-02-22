export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    options: Array<string | object>;
    label?: string;
    item: string; 
    setItem: React.SetStateAction<any>;
    resetSelect: boolean;
}