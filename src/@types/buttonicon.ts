export interface IButtonIcon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    icon: JSX.Element;
    className?: string;
}