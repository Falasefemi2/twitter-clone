import { IconType } from "react-icons";

export interface SidebarItemProps {
    label: string;
    href?: string;
    icon: IconType;
    onClick?: () => void;
}

export interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

export interface ButtonProps {
    label: string;
    secondary?:  boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

export interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled: boolean;
}

export interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
} 

export interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
} 