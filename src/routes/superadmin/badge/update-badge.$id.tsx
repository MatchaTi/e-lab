import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Input from '@/components/Input';
import Textarea from '@/components/Textarea';
import StaffLayout from '@/components/StaffLayout';

export const Route = createFileRoute('/superadmin/badge/update-badge/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Update badge with ID:', id);

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Update Badge</h1>
                <p>Halaman untuk memperbarui data badge pada sistem.</p>

                <form action='' className='grid gap-6 lg:grid-cols-2'>
                    <div className='lg:col-span-2'>
                        <Input label='Nama Badge' placeholder='Nama Badge' icon='material-symbols:badge-outline' />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        <Textarea label='Deskripsi' placeholder='Deskripsikan Badge' />
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
