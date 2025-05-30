import { createFileRoute } from '@tanstack/react-router';
import StaffLayout from '@/components/StaffLayout';

export const Route = createFileRoute('/superadmin/ruangan/')({
    component: RouteComponent,
});

function RouteComponent() {
    return <StaffLayout>Hello Ruangan</StaffLayout>;
}
