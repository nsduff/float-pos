export default function Tables({ setShowButton }) {
    const handleClick = (i) => {
        setShowButton(i);
        console.log("Table " + (i + 1) + " has been clicked!");
    };

    return (
        <div className="wrapper_tables">
            {new Array(9).fill(null).map((a, i) => {
                return (
                        <button
                            key={i}
                            className={"table_button"}
                            onClick={() => handleClick(i)}
                        >
                            Table {i + 1}
                        </button>
                );
            })}
        </div>
    );
}
