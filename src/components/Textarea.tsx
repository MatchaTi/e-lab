import clsx from 'clsx';
import Fieldset from './Fieldset';

interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    className?: string;
    placeholder: string;
}

export default function Textarea({ label, className = '', placeholder, ...props }: TextareaProps) {
    return (
        <Fieldset className={clsx('w-full', className)}>
            <Fieldset.Legend>{label ? label : 'Text'}</Fieldset.Legend>
            <Fieldset.Body>
                <textarea
                    className='w-full textarea field-sizing-content'
                    placeholder={placeholder}
                    {...props}
                ></textarea>
            </Fieldset.Body>
        </Fieldset>
    );
}
