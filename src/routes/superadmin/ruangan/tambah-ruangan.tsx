import { createFileRoute } from '@tanstack/react-router';
import { Icon } from '@iconify/react/dist/iconify.js';
import StaffLayout from '@/components/StaffLayout';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';

export const Route = createFileRoute('/superadmin/ruangan/tambah-ruangan')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Tambah Data Ruangan</h1>
                <p>Halaman untuk menambah data ruangan pada sistem.</p>

                <form action='' className='grid gap-6 lg:grid-cols-2'>
                    <div>
                        <Input label='Nama Ruangan' placeholder='Nama Ruangan' icon='mingcute:school-line' />
                        {/* TODO: error handling message */}
                    </div>

                    <div>
                        <Input label='Kode Ruangan' placeholder='Kode Ruangan' icon='tabler:hash' />
                        {/* TODO: error handling message */}
                    </div>

                    <div>
                        <Input label='Kapasitas Ruangan' placeholder='Kapasitas Ruangan' icon='ix:capacity' />
                        {/* TODO: error handling message */}
                    </div>

                    <div>
                        {/* TODO: Preview ruangan */}
                        <Input label='Preview Ruangan' placeholder='Upload Preview Ruangan' icon='iconoir:eye' />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        <Textarea label='Deskripsi' placeholder='Deskripsikan Ruangan' />
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
