"use client";

import Exampad from "@/public/examPad";

export default function SQLQuery() {
    const handleCopyText = async (e: any) => {
        try {
            const curr = e.target.parentNode.parentNode.children[1].innerText;
            await navigator.clipboard.writeText(curr);
        } catch (err) {
            console.error("Unable to copy to clipboard.", err);
            alert("Copy to clipboard failed.");
        }
    };

    return (
        <div className="pl-11 relative ">
            <button
                className="absolute right-0 p-2 flex items-center justify-center gap-1 bg-gray-600 rounded text-[10px] text-white"
                onClick={handleCopyText}
            >
                <Exampad></Exampad>
                <p>Copy Code</p>
            </button>
            <div className="bg-gray-700 p-2.5 rounded-xl text-gray-200 text-xs ">
                SELECT orders.order_id, customers.customer_name,
                products.product_name, order_details.quantity,
                order_details.unit_price,
                {"(order_details.quantity * order_details.unit_price)"} AS
                total_price FROM orders INNER JOIN customers ON
                orders.customer_id = customers.customer_id INNER JOIN
                order_details ON orders.order_id = order_details.order_id INNER
                JOIN products ON order_details.product_id = products.product_id
                WHERE orders.order_date {">"}= '2023-01-01' AND
                orders.order_date {"<"}= '2023-12-31' ORDER BY orders.order_id;
            </div>
        </div>
    );
}
