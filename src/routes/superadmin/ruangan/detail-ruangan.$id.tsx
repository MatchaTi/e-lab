import { Icon } from '@iconify/react/dist/iconify.js';
import { createFileRoute } from '@tanstack/react-router';
import clsx from 'clsx';
import StaffLayout from '@/components/StaffLayout';
import Fieldset from '@/components/Fieldset';

export const Route = createFileRoute('/superadmin/ruangan/detail-ruangan/$id')({
    component: RouteComponent,
});

type typeStatus = 'available' | 'unavailable';

function RouteComponent() {
    const { id } = Route.useParams();
    console.log('Detail room with ID:', id);
    // This would typically come from an API call based on the room ID
    const status: typeStatus = 'available'; // For now hardcoded, but should be dynamic

    // TODO: Fetch existing room data using the ID and populate the form fields
    // TODO: Handle form submission to update the room data

    return (
        <StaffLayout>
            <main className='p-6 space-y-6 rounded-lg shadow-lg bg-base-200 shadow-base-content/5'>
                <h1 className='text-3xl font-bold'>Detail Data Ruangan</h1>
                <p>Halaman untuk menampilkan data ruangan pada sistem.</p>

                <section className='grid gap-6 lg:grid-cols-2'>
                    <Fieldset className='w-full'>
                        <Fieldset.Legend>Nama Ruangan</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='mingcute:school-line' />
                            <span>Nama Ruangan</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full'>
                        <Fieldset.Legend>Kode Ruangan</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='tabler:hash' />
                            <span>Kode Ruangan</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full'>
                        <Fieldset.Legend>Kapasitas Ruangan</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='ix:capacity' />
                            <span>Kapasitas Ruangan</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full'>
                        <Fieldset.Legend>Preview Ruangan</Fieldset.Legend>
                        <Fieldset.Body className='w-full input'>
                            <Icon icon='iconoir:eye' />
                            <span>Preview Ruangan</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Preview Ruangan</Fieldset.Legend>
                        <Fieldset.Body className='w-full textarea field-sizing-content'>
                            <span>Preview Ruangan</span>
                        </Fieldset.Body>
                    </Fieldset>

                    <Fieldset className='w-full lg:col-span-2'>
                        <Fieldset.Legend>Status</Fieldset.Legend>
                        <Fieldset.Body
                            // TODO: fix this next time
                            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                            className={clsx('alert w-full', status === 'available' ? 'alert-success' : 'alert-error')}
                        >
                            <span>Tersedia</span>
                        </Fieldset.Body>
                    </Fieldset>
                </section>
            </main>
        </StaffLayout>
    );
}
