import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from '@tanstack/react-router';

interface MasterDataHeaderProps {
    title: string;
    description: string;
    createHref: string;
}

export default function MasterDataHeader({ title, description, createHref }: MasterDataHeaderProps) {
    return (
        <section className='flex justify-between items-center'>
            <div className='space-y-6'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p>{description}</p>
            </div>
            <Link to={createHref} className='btn btn-primary'>
                <Icon icon='stash:plus-duotone' />
                Tambah
            </Link>
        </section>
    );
}
