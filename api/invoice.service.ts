import { promises } from "node:dns";
import pool from "./database.ts";
export type InvoiceStatus = "pending" | "paid";


interface Customer {
  id: number;
  name: string;
  email: string;
}

interface Invoice {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer: Customer;
}


interface InvoiceRow {
  id: number;
  amount: number;
  status: InvoiceStatus;
  issueDate: string;
  dueDate: string;
  customer_id: number;
  customer_name: string;
  customer_email: string;
}

function toInvoice(row: InvoiceRow): Invoice {

  return {
    id: row.id,
    amount: row.amount,
    status: row.status,
    issueDate: row.issueDate,
    dueDate: row.dueDate,
    customer: {
      id: row.customer_id,
      name: row.customer_name,
      email: row.customer_email
    }
  };
}

const baseQuery = 'SELECT invoices.id, invoices.amount, invoices.status, invoices.issue_date::text AS "issueDate", invoices.due_date::text AS "dueDate", invoices.customer_id, customers.name AS customer_name, customers.email AS customer_email FROM invoices INNER JOIN customers ON invoices.customer_id = customers.id';

export async function findAllInvoices(): Promise<Invoice[]> {
  const connect = await pool.query<InvoiceRow>(`${baseQuery} ORDER BY invoices.issue_date DESC;`);
  const invoices: Invoice[] = [];

  connect.rows.forEach(invoice=>invoices.push(toInvoice(invoice)));

  return invoices;

}

export async function findInvoiceById(id: number): Promise<Invoice | undefined>{
  const connect = await pool.query<InvoiceRow>(`${baseQuery} WHERE invoices.id = $1;`,[id]);

  if (!connect.rows.length) return undefined;

  return toInvoice(connect.rows[0]);


}