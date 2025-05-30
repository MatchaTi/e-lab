import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import Fieldset from '@/components/Fieldset';
import StaffLayout from '@/components/StaffLayout';

export const Route = createFileRoute('/superadmin/kategori-modul/detail-kategori-modul/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Detail kategori modul with ID:', id);

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Detail Kategori Modul</h1>
                <p>Halaman untuk menampilkan data kategori modul pada sistem.</p>

                <section className='grid gap-6 lg:grid-cols-2'>
                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Nama Kategori</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='tabler:category-plus' />
                            <span>Nama Kategori</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Deskripsi</Fieldset.Legend>
                        <Fieldset.Body className='w-full textarea field-sizing-content'>
                            <span>Deskripsi Kategori</span>
                        </Fieldset.Body>
                    </Fieldset>
                </section>
            </main>
        </StaffLayout>
    );
}
