import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import Fieldset from './Fieldset';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'file' | 'date';
    label: string;
    className?: string;
    placeholder: string;
    icon: string;
}

export default function Input({ type = 'text', label, className = '', placeholder, icon, ...props }: InputProps) {
    return (
        <Fieldset className='w-full'>
            <Fieldset.Legend>{label ? label : 'Text'}</Fieldset.Legend>
            <Fieldset.Body className='w-full input'>
                <Icon icon={icon} />
                <input className={clsx('w-full', className)} type={type} placeholder={placeholder} {...props} />
            </Fieldset.Body>
        </Fieldset>
    );
}
