export default function Footer() {
    return (
        <div className="wrapper_footer">
            <button className="button_footer">PAY</button>
            <button className="button_footer">OPTIONS</button>
            <button className="button_footer_logout"><a href={`/logout`}>LOGOUT</a></button>
            
        </div>
    );
}
