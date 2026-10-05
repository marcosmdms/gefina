import InvoiceRow from "./InvoiceRow";
import { Invoice } from "./invoiceType.ts";

interface InvoiceTableProps{
    invoices: Invoice[];

}

export default function (props: InvoiceTableProps){
    const invoices = props.invoices;

    return <table>
        <thead>
            <tr>
                <td>Cliente</td>
                <td>Valor</td>
                <td>Data de Emissão</td>
                <td>Dta de Vencimento</td>
                <td>Situação</td>
            </tr>
        </thead>
        <tbody>
            {invoices.map(invoice =>(
                <InvoiceRow key={invoice.id} invoice={invoice}/>
            ))}
        </tbody>

    </table>


}