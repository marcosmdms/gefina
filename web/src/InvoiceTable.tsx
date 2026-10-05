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
                <td className="px-6 py-3">Cliente</td>
                <td className="px-6 py-3">Valor</td>
                <td className="px-6 py-3">Data de Emissão</td>
                <td className="px-6 py-3">Dta de Vencimento</td>
                <td className="px-6 py-3">Situação</td>
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