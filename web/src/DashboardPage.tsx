import SummaryCard from "./SummaryCard.tsx";
import InvoiceSummaryTable from "./InvoiceTable.tsx";
//-----------------------------------------------------------------
import { useEffect, useState } from "react";

type Invoice = {
  id: number;
  amount: number;
  status: string;
  issueDate: string;
  dueDate: string;
  customer_name: string;
};

type DashboardData = {
  totalReceived: number;
  totalPending: number;
  invoiceCount: number;
  customerCount: number;
  recentInvoices: Invoice[];
  overdueInvoices: Invoice[];
};

const formatCurrency = (value: number) =>
  (value / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatDate = (value: string) =>
  new Date(`${value.slice(0, 10)}T12:00:00`).toLocaleDateString("pt-BR");

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/dashboard")
      .then((response) => {
        if (!response.ok) throw new Error("Falha ao carregar");
        return response.json();
      })
      .then(setData)
      .catch(() => setError("Não foi possível carregar o painel."));
  }, []);

  if (error) {
    return <p className="p-8 text-red-600">{error}</p>;
  }

  if (!data) {
    return <p className="p-8 text-slate-600">Carregando painel...</p>;
  }

  const cards = [
    { title: "Total recebido", value: formatCurrency(data.totalReceived) },
    { title: "Total pendente", value: formatCurrency(data.totalPending) },
    { title: "Faturas", value: String(data.invoiceCount) },
    { title: "Clientes", value: String(data.customerCount) },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <header className="mb-8 flex flex-wrap items-center justify-between gap-6">
        <h1 className="text-3xl font-extrabold text-blue-600">
          Gefina
        </h1>

        <nav className="flex gap-6 font-medium text-slate-600">
          <a href="/" className="text-blue-600">Painel Inicial</a>
          <a href="/invoices" className="hover:text-blue-600">Faturas</a>
        </nav>
      </header>

      <h2 className="mb-6 text-3xl font-bold text-slate-900">Painel</h2>

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="mb-3 text-sm text-slate-500">{card.title}</p>
            <p className="text-2xl font-bold text-slate-900">{card.value}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <InvoiceTable
          title="Faturas recentes"
          invoices={data.recentInvoices}
          dateField="issueDate"
        />

        <InvoiceTable
          title="Faturas atrasadas"
          invoices={data.overdueInvoices}
          dateField="dueDate"
        />
      </section>
    </main>
  );
}

function InvoiceTable({
  title,
  invoices,
  dateField,
}: {
  title: string;
  invoices: Invoice[];
  dateField: "issueDate" | "dueDate";
}) {
  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-xl font-bold text-slate-900">{title}</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="p-3">Cliente</th>
              <th className="p-3">Valor</th>
              <th className="p-3">
                {dateField === "issueDate" ? "Emissão" : "Vencimento"}
              </th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-slate-100">
                <td className="whitespace-nowrap p-3 font-medium text-slate-700">
                  {invoice.customer_name}
                </td>
                <td className="whitespace-nowrap p-3 text-slate-700">
                  {formatCurrency(invoice.amount)}
                </td>
                <td className="whitespace-nowrap p-3 text-slate-600">
                  {formatDate(invoice[dateField])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <a
        href="/invoices"
        className="mt-5 inline-block font-medium text-blue-600 hover:text-blue-800"
      >
        Ver todas as faturas →
      </a>
    </section>
  );
}

