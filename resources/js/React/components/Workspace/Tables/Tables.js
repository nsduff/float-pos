export default function Tables({ setShowButton }) {
  const handleClick = (i) => {
    setShowButton(i);
    console.log("Table " + (i + 1) + " has been clicked!");
  };

  return (
    <>
      {new Array(4).fill(null).map((a, i) => {
        return (
          <div className={"table__button"}>
            <button className={"table__button"} onClick={() => handleClick(i)}>
              Table {i + 1}
            </button>
          </div>
        );
      })}
    </>
  );
}
