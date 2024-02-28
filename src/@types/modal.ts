export interface IModal{
    status: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}