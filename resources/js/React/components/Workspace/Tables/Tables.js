export default function Tables({ setShowButton }) {
    const handleClick = (i) => {
        setShowButton(i);
    };

    return (
        <>
            {new Array(4).fill(null).map((a, i) => {
                return (
                    <div className={"table_buttons"} key={i}>
                        <button
                            className={"table_button"}
                            onClick={() => handleClick(i)}
                        >
                            Table {i + 1}
                        </button>
                    </div>
                );
            })}
        </>
    );
}
