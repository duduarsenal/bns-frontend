export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon?: JSX.Element;
    className?: string;
}