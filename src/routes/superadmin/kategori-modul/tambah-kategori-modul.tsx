import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Input from '@/components/Input';
import StaffLayout from '@/components/StaffLayout';
import Textarea from '@/components/Textarea';

export const Route = createFileRoute('/superadmin/kategori-modul/tambah-kategori-modul')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Tambah Kategori Modul</h1>
                <p>Halaman untuk menambah data kategori modul pada sistem.</p>

                <form action='' className='grid gap-6 lg:grid-cols-2'>
                    <div className='lg:col-span-2'>
                        <Input label='Nama Kategori' placeholder='Nama Kategori' icon='tabler:category-plus' />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        <Textarea label='Deskripsi' placeholder='Deskripsikan Kategori' />
                    </div>

                    <button className='btn btn-primary w-fit'>
                        <Icon icon='stash:plus-duotone' />
                        <span>Tambah</span>
                    </button>
                </form>
            </main>
        </StaffLayout>
    );
}
