import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Input from '@/components/Input';
import StaffLayout from '@/components/StaffLayout';
import Textarea from '@/components/Textarea';

export const Route = createFileRoute('/superadmin/ruangan/update-ruangan/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Updating room with ID:', id);

    // TODO: Fetch existing room data using the ID and populate the form fields
    // TODO: Handle form submission to update the room data

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Update Data Ruangan</h1>
                <p>Halaman untuk meng-update data ruangan pada sistem.</p>

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
                        <Icon icon='akar-icons:edit' />
                        <span>Update</span>
                    </button>
                </form>
            </main>
        </StaffLayout>
    );
}
