'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'primary' | 'secondary' | 'tertiary';
type ButtonText = string;
type ButtonIcon = React.ReactNode;
type ButtonLoading = boolean;
type ButtonDisabled = boolean;
type ButtonOnClick = () => void;

interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    type?: ButtonType;
    color?: ButtonColor;
    text?: ButtonText;
    icon?: ButtonIcon;
    loading?: ButtonLoading;
    disabled?: ButtonDisabled;
    onClick?: () => void;
    duration?: number;
}

function Button({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    color = 'primary',
    text = 'Click me',
    icon = null,
    loading = false,
    disabled = false,
    onClick,
    duration = 300,
 }: ButtonProps) {
        
    const base = `button-${variant} button-${size} button-${color} button-${type} button-${text} button-${icon} button-${loading} button-${disabled} button-${onClick}`;
    
    const variants: Record<ButtonVariant, string> = {
        primary: `py-2 px-4 xl:py-2 xl:px-10 hover:bg-black hover:text-white duration-${duration} ease-in-out`,
        secondary: `py-2 px-4 xl:py-2 xl:px-10 hover:bg-white/80 hover:text-black duration-${duration} ease-in-out`,
        tertiary: `py-2 px-4 xl:py-2 xl:px-10 hover:bg-white hover:text-black duration-${duration} ease-in-out`,
    };
    const sizes: Record<ButtonSize, string> = {
        small: 'text-sm',
        medium: 'text-[10px] sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base ',
        large: 'text-lg',
    };
    const colors: Record<ButtonColor, string> = {
        primary: 'bg-white text-black',
        secondary: 'border border-white text-white ',
        tertiary: 'bg-black text-white',
    };
    const types: Record<ButtonType, string> = {
        button: 'button',
        submit: 'submit',
        reset: 'reset',
    };
    const texts: Record<ButtonText, string> = {
        'Click me': 'Click me',
        'Submit': 'Submit',
        'Reset': 'Reset',
    };
   
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';


    return (
        <button
        onClick={onClick}
        disabled={disabled}
        style={{ transitionDuration: `${duration}ms` }}
        className={`${base} ${variants[variant]} ${sizes[size]} ${colors[color]} ${types[type]} ${texts[text]} ${disabledClass}`}
        >
            {children}
        </button>
    )
}

export default Button