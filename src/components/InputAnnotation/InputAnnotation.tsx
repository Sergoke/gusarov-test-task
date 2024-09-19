import './InputAnnotation.css';

interface InputAnnotationProps {
    text: string;
    marginTopSize: 'sm' | 'md';
    disabled?: boolean;
    error?: boolean;
}
    
function InputAnnotation({ text, marginTopSize = 'sm', disabled = false, error = false }: InputAnnotationProps) {
    return <p className={`input-annotation margin-top-${marginTopSize} ${disabled ? 'disabled' : ''} ${error ? 'error' : ''}`}>{text}</p>;
}

export default InputAnnotation;
