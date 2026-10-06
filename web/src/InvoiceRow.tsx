import { Invoice } from "./invoiceType.ts"
import statusLabel from "./statusLabel.ts";
import statusColor from "./style.ts";
import { styleTd } from "./style.ts";

interface InvoiceRowProps {
    invoice:Invoice;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}


function formatDate(value: string) { // tranforma data
    return new Intl.DateTimeFormat("pt-BR").format( new Date(value + "T00:00:00") ); 
}



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