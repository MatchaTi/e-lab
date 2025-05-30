import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/superadmin/ruangan/update-ruangan')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/superadmin/ruangan/update-ruangan"!</div>
}
