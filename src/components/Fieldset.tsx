import clsx from 'clsx';

interface FieldsetProps {
    children: React.ReactNode;
    className?: string;
}

export default function Fieldset({ children, className }: FieldsetProps) {
    return <fieldset className={clsx('fieldset w-full', className)}>{children}</fieldset>;
}

function FieldsetLegend({ children, className }: { children: React.ReactNode; className?: string }) {
    return <legend className={clsx('fieldset-legend text-sm', className)}>{children}</legend>;
}

function FieldsetLabel({ children }: { children: React.ReactNode }) {
    return <label className='flex justify-between items-center pr-0 w-full input'>{children}</label>;
}

function FieldsetBody({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={clsx('fieldset-body', className)}>{children}</div>;
}

Fieldset.Legend = FieldsetLegend;
Fieldset.Label = FieldsetLabel;
Fieldset.Body = FieldsetBody;
