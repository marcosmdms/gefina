import { InvoiceSituation} from "./invoiceType.ts"


export function situationLabel (situation: InvoiceSituation){

    return situation === "paid" ? "PAGA" : situation === "overdue" ? "ATRASADA" : "PENDENTE";

}

export function formatCurrency(cents: number): string{
    return new Intl.NumberFormat("pt-BR", {
     style: "currency",
     currency: "BRL",
    }).format(cents/100);

}

export function formatDate(isoDate: string):string { 
     return new Intl.DateTimeFormat("pt-BR",{
        day: "2-digit",
        month:"2-digit",
        year: "numeric"
     }).format( new Date(isoDate + "T00:00:00") ); 
}