import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: "Dashboard",
}

function page() {
  return (
    <div>
      Customers Page
    </div>
  )
}

export default page
