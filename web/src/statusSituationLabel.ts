import { InvoiceSituation} from "./invoiceType.ts"


export default function situationLabel (situation: InvoiceSituation){

    return situation === "paid" ? "PAGA" : situation === "overdue" ? "ATRASADA" : "PENDENTE";

}