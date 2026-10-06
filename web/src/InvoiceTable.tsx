import InvoiceRow from "./InvoiceRow";
import { Invoice } from "./invoiceType.ts";

interface InvoiceTableProps{
    invoices: Invoice[];

}

export default function (props: InvoiceTableProps){
    const invoices = props.invoices;

    return <div className="max-w-4xl mx-auto overflow-x-auto bg-white rounded-lg shadow">
    <table className="w-full text-left">
        <thead>
            <tr className="bg-gray-800 text-white divide-x divide-gray-700">
                <th className="px-6 py-3">Cliente</th>
                <th className="px-6 py-3">Valor</th>
                <th className="px-6 py-3">Data de Emissão</th>
                <th className="px-6 py-3">Data de Vencimento</th>
                <th className="px-6 py-3">Situação</th>
            </tr>
        </thead>
        <tbody>
            {invoices.map(invoice =>(
                <InvoiceRow key={invoice.id} invoice={invoice}/>
            ))}
        </tbody>

    </table>

</div>
}