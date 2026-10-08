export const styleTd = "px-6 py-4 border-b border-gray-200";

export default function statusColor(value: string) { 
    if (value === "paid"){
        return "px-6 py-4 border-b border-gray-200 text-green-700 font-bold";
    } else {

        return "px-6 py-4 border-b border-gray-200 text-red-700 font-bold";
    }
}



