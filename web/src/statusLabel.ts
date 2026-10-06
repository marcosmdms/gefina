import { InvoiceStatus } from "./invoiceType.ts"


export default function statusLabel (status: InvoiceStatus){

    return status === "paid" ? "PAGO" : "PENDENTE";

}