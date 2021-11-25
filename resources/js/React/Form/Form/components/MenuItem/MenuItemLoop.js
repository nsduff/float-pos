import MenuItem from "./MenuItem";

function MenuItemLoop(props) {
    return (
        <Card className="expenses">
            {props.items.map((item, i) => (
                <MenuItem
                    key={i}
                    name={item.name}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
}

export default MenuItemLoop;
