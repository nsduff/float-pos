import axios from "axios";

export default function Footer({ pay, setPay }) {
    const payOrder = async (e) => {
        e.preventDefault();
        const payment = prompt(`"Your total is: "${total}`);
        if (payment < total) {
            alert("Amount paid not enough. Please try again");
        }
        if (payment >= total) {
            alert("Order paid. Thank you for coming!");

            try {
                const data = await axios.post("/api/orders", {
                    paid: 1,
                });

                // stops here and wait for response from ajax request
                console.log(data.data);
            } catch (error) {
                alert("something went wrong");
                //log for developer use
                console.log(errors);
            }
        }
    };

    return (
        <div className="wrapper_footer">
            <button className="button_footer" onClick={() => setPay(!pay)}>
                PAY
            </button>
            <button className="button_footer">OPTIONS</button>
            <button className="button_footer_logout">
                <a href={`/logout`}>LOGOUT</a>
            </button>
        </div>
    );
}
