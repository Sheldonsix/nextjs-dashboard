import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create Invoice',
}

export default async function Page() {
    const cunstomers = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label:'Invoices', href:'/dashboard/invoices'},
                    {
                        label:'Create Invocie',
                        href: '/dashboard/invoices/create',
                        active: true
                    }
                ]}
            />
            <Form customers={cunstomers}/>
        </main>
    )
}