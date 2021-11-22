export default function Footer() {
    return (
        <>
            <button className={"footer"}>Pay</button>
            <button className={"footer"}>Options</button>
            <a href={`/logout`}>
                <button className={"footer"}>Logout</button>
            </a>
        </>
    );
}
