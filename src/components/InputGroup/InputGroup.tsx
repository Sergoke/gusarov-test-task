import InputLabel from '../InputLabel/InputLabel';
import InputText from '../InputText/InputText';
import InputAnnotation from '../InputAnnotation/InputAnnotation';
import './InputGroup.css';
import { useId } from 'react';

interface InputGroupProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputId?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
    label?: string;
    labelPosition?: 'top' | 'side';
    labelSize?: 'sm' | 'md';
    labelIcon?: boolean;
    helperText?: string;
    quiet?: boolean;
    textAlign?: 'left' | 'right';
    variant?: 'fill' | 'outline';
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    shortKey?: string;
}

function InputGroup({
    value,
    onChange,
    inputId,
    size='md',
    placeholder,
    disabled = false,
    error = false,
    required = false,
    label,
    labelPosition = 'top',
    labelSize='md',
    labelIcon=false,
    helperText,
    quiet = false,
    textAlign = 'left',
    variant = 'fill',
    iconBefore,
    iconAfter,
    shortKey,
}: InputGroupProps) {
    const generatedId = useId();
    const finalInputId = inputId || `input-${generatedId}`;

    return (
        <div>
            <div className={`input-label-text-wrapper ${labelPosition === 'top' ? 'label-top' : 'label-side'}`}>
                {label && <InputLabel text={label} required={required} inputId={finalInputId} labelSize={labelSize} labelIcon={labelIcon} disabled={disabled} />}
                <InputText
                    value={value}
                    inputId={finalInputId}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    error={error}
                    size={size}
                    quiet={quiet}
                    textAlign={textAlign}
                    variant={variant}
                    iconBefore={iconBefore}
                    iconAfter={iconAfter}
                    shortKey={shortKey}
                />
            </div>

            {helperText && <InputAnnotation text={helperText} marginTopSize={labelSize} disabled={disabled} error={error}/>}
        </div>
    );
}

export default InputGroup;
