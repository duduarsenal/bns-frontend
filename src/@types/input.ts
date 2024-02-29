export interface InputsProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    type?: string;
    placeholder: string;
    value?: string;
    // onChange: FunctionComponent;
    icon?: React.JSX.Element;
    error?: string;
    loading?: boolean;
    tela?: string;
}