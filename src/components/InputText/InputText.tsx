import React from 'react';
import './InputText.css';

interface InputTextProps {
    value: string;
    inputId?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'fill' | 'outline';
    textAlign?: 'left' | 'right';
    disabled?: boolean;
    error?: boolean;
    quiet?: boolean;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    shortKey?: string;
}

export const InputText: React.FC<InputTextProps> = ({
    value,
    inputId,
    placeholder,
    onChange,
    size = 'md',
    variant = 'fill',
    textAlign = 'left',
    disabled = false,
    error = false,
    quiet = false,
    iconBefore,
    iconAfter,
    shortKey,
}) => {
    return (
        <div className={`input-with-icons ${size} ${variant} ${error && !disabled ? 'error' : ''} ${disabled ? 'disabled' : ''} ${quiet ? 'quiet' : ''} ${textAlign ? 'text-align-' + textAlign : ''}`}>
            {iconBefore && <span className="icon-before">{iconBefore}</span>}
            <input
                className="input-text"
                id={inputId}
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
            />
            {iconAfter && <span className="icon-after">{iconAfter}</span>}
            {shortKey && <div className="short-key" aria-label={shortKey}>
                <span>{shortKey}</span>
            </div>}
        </div>
    );
};

export default InputText;
