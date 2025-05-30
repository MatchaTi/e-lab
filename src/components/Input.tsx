import { Icon } from '@iconify/react/dist/iconify.js';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'file' | 'date';
    label: string;
    className?: string;
    placeholder: string;
    icon: string;
}

export default function Input({ type = 'text', label, className = '', placeholder, icon, ...props }: InputProps) {
    return (
        <fieldset className='w-full fieldset'>
            <legend className='text-sm fieldset-legend'>{label ? label : 'Text'}</legend>
            <label className='w-full input'>
                <Icon icon={icon} />
                <input className={`w-full ${className}`} type={type} placeholder={placeholder} {...props} />
            </label>
        </fieldset>
    );
}
