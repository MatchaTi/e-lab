import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Input from '@/components/Input';
import StaffLayout from '@/components/StaffLayout';
import Textarea from '@/components/Textarea';
import Fieldset from '@/components/Fieldset';

export const Route = createFileRoute('/superadmin/alat-lab/update-alat-lab/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Update alat lab with ID:', id);

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Form Update Data Alat Lab</h1>
                <p>Halaman untuk memperbarui data alat lab pada sistem.</p>

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
                        {/* TODO: Preview Alat */}
                        <Input
                            type='file'
                            className='file-input'
                            label='Preview Alat Lab'
                            placeholder='Upload Preview Alat lab'
                            icon='iconoir:eye'
                        />
                        {/* TODO: error handling message */}
                    </div>

                    <div className='lg:col-span-2'>
                        <Textarea label='Deskripsi' placeholder='Deskripsikan Alat' />
                    </div>

                    <Fieldset>
                        <Fieldset.Legend>Status</Fieldset.Legend>
                        <Fieldset.Body>
                            <select className='w-full select' required>
                                <option hidden>Pilih Status</option>
                                <option value='available'>Tersedia</option>
                                <option value='unavailable'>Tidak Tersedia</option>
                            </select>
                        </Fieldset.Body>
                    </Fieldset>

                    <div></div>

                    <button className='btn btn-primary w-fit'>
                        <Icon icon='akar-icons:edit' />
                        <span>Update</span>
                    </button>
                </form>
            </main>
        </StaffLayout>
    );
}
