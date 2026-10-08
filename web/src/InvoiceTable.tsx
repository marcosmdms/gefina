import InvoiceRow from "./InvoiceRow";
import { Invoice } from "./invoiceType.ts";

interface InvoiceTableProps {
    invoices: Invoice[];

}

export default function (props: InvoiceTableProps) {
    const invoices = props.invoices;

    return <div overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200>
        <h1 class="text-2xl font-bold text-gray-900">
            Faturas
        </h1>

        <p class="mt-1 text-sm text-gray-500">
            Acompanhe suas faturas e pagamentos
        </p><br/>
        <table className="w-full text-left">
            <thead>
                <tr className="bg-gray-800 text-white divide-x divide-gray-700 text-center">
                    <th className="px-6 py-3">Cliente</th>
                    <th className="px-6 py-3">Valor</th>
                    <th className="px-6 py-3">Data de Emissão</th>
                    <th className="px-6 py-3">Data de Vencimento</th>
                    <th className="px-6 py-3">Situação</th>
                </tr>
            </thead>
            <tbody>
                {invoices.map(invoice => (
                    <InvoiceRow key={invoice.id} invoice={invoice} />
                ))}
            </tbody>

        </table>

    </div>
}