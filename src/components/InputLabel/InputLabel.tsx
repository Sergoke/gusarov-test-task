import './InputLabel.css';

const labelIconSvg =
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
        <g clip-path="url(#clip0_29162_11889)">
            <path d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#A0A0AB" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_29162_11889">
                <rect width="12" height="12" fill="white" />
            </clipPath>
        </defs>
    </svg>;

interface InputLabelProps {
    text: string;
    inputId: string;
    required?: boolean;
    labelSize?: 'sm' | 'md';
    labelIcon?: boolean;
    disabled?: boolean;
}

function InputLabel({ text, inputId, required = false, labelSize, labelIcon, disabled = false }: InputLabelProps) {
    return (
        <div className={`input-label-wrapper ${labelSize === 'sm' ? 'label-sm' : 'label-md'} ${disabled ? 'disabled' : ''}`}>
            <label htmlFor={inputId}>
                {text}
            </label>
            {labelIcon && <span className='label-icon'>{labelIconSvg}</span>}
            {required && <span className='required'>*</span>}
        </div>
    );
}

export default InputLabel;
