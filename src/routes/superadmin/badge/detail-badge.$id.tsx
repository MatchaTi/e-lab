import { createFileRoute } from '@tanstack/react-router';
import { Icon } from '@iconify/react/dist/iconify.js';
import StaffLayout from '@/components/StaffLayout';
import Fieldset from '@/components/Fieldset';

export const Route = createFileRoute('/superadmin/badge/detail-badge/$id')({
    component: RouteComponent,
});

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Detail badge with ID:', id);

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Detail Badge</h1>
                <p>Halaman untuk menampilkan data badge pada sistem.</p>

                <section className='grid gap-6 lg:grid-cols-2'>
                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Nama Badge</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='material-symbols:badge-outline' />
                            <span>Nama Badge</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Deskripsi</Fieldset.Legend>
                        <Fieldset.Body className='w-full textarea field-sizing-content'>
                            <span>Deskripsi Badge</span>
                        </Fieldset.Body>
                    </Fieldset>
                </section>
            </main>
        </StaffLayout>
    );
}
