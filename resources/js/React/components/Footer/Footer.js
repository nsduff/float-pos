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

            <button className="button_footer_logout">
                <a href={`/logout`}>LOGOUT</a>
            </button>
        </div>
    );
}
