export default function Footer() {
    return (
        <>
            <button>Pay</button>
            <button>Options</button>
            <a href={`/logout`}>
                <button>Logout</button>
            </a>
        </>
    );
}
