export default function TableItems({ showButton, setShowButton }) {
    return (
        <div className={"table__order"}>
            <h3>Table # {showButton + 1}</h3>

            {new Array(4).fill(null).map((n, m) => {
                return (
                    <div className={"table__order__list"} key={m}>
                        <div className={"table__order__item"}>
                            Item # {m + 1}
                        </div>
                    </div>
                );
            })}

            <button onClick={() => setShowButton(null)}>Back</button>
        </div>
    );
}
