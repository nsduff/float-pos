export default function Footer() {
    return (
        <>
            <button>Pay</button>
            <button>Options</button>
            <form action="{{ route('logout') }}" method="post">
                <button>Logout</button>
            </form>
        </>
    );
}
