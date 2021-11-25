import MenuItem from "./MenuItem";

function MenuItemLoop(props) {
    return (
        <div>
            {props.items.map((item, i) => (
                <MenuItem
                    key={i}
                    name={item.name}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    );
}

export default MenuItemLoop;
