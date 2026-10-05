import { Invoice } from "./invoiceType.ts"
import statusLabel from "./statusLabel.ts";

interface InvoiceRowProps {
    invoice:Invoice;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}


function formatDate(value: string) {
    return new Intl.DateTimeFormat("pt-BR").format( new Date(value + "T00:00:00") ); 
}

function statusColor(value: string) {
    if (value === "paid"){
        return "px-6 py-4 border-r border-b border-gray-200 text-green-700";
    } else {

        return "px-6 py-4 border-r border-b border-gray-200 text-red-700";
    }
}



const styleTd = "px-6 py-4 border-r border-b border-gray-200";

export default function InvoiceRow(props: InvoiceRowProps) {

    const invoice = props.invoice;
    return <tr>
        <td className={styleTd}>{invoice.customer.name}</td>
        <td className={styleTd}>{formatCurrency(invoice.amount)}</td>
        <td className={styleTd}>{formatDate(invoice.issueDate)}</td>   
        <td className={styleTd}>{formatDate(invoice.dueDate)}</td>
        <td className={statusColor(invoice.status)}>{statusLabel(invoice.status)}</td>
    </tr>

}