export default function Footer({ options, setOptions }) {
    return (
        <div className="wrapper_footer">
            <button className="button_footer">PAY</button>
            <button
                onClick={() => setOptions(!options)}
                className="button_footer"
            >
                OPTION
            </button>

            <a
                className="button_footer_logout  d-flex align-items-center justify-content-center"
                href={`/logout`}
            >
                LOGOUT
            </a>
        </div>
    );
}
