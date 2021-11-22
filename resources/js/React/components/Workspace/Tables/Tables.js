export default function Tables({ setShowButton }) {
    const handleClick = (i) => {
        setShowButton(i);
    };

    return (
        <>
            {new Array(4).fill(null).map((a, i) => {
                return (
                    <div className={"table__button"} key={i}>
                        <button
                            className={"table__button"}
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
