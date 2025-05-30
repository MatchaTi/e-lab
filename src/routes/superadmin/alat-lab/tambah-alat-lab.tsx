import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Input from '@/components/Input';
import StaffLayout from '@/components/StaffLayout';
import Textarea from '@/components/Textarea';

export const Route = createFileRoute('/superadmin/alat-lab/tambah-alat-lab')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Tambah Data Alat Lab</h1>
                <p>Halaman untuk menambah data alat lab pada sistem.</p>

                <form action='' className='grid gap-6 lg:grid-cols-2'>
                    <div>
                        <Input label='Nama Alat' placeholder='Nama Alat' icon='tabler:tools' />
                        {/* TODO: error handling message */}
                    </div>

                    <div>
                        <Input type='number' label='Jumlah Alat' placeholder='Jumlah Alat' icon='tabler:hash' />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        {/* TODO: Preview ruangan */}
                        <Input
                            type='file'
                            className='file-input'
                            label='Preview Ruangan'
                            placeholder='Upload Preview Ruangan'
                            icon='iconoir:eye'
                        />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        <Textarea label='Deskripsi' placeholder='Deskripsikan Alat' />
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
