export default function Sidebar({ categories, setCategoryId }) {
    //const [buttonClicked, setButtonClicked] = useState(false);

    // const buttonSwitchColor = () =>{
    //     buttonClicked ? setButtonClicked(false) : setButtonClicked(true);
    // }
    return (
        <div className="wrapper_sidebar">
            {categories.map((category, index) => {
                return (
                    <button
                        // className={buttonClicked ? "button_sidebar_active" : "button_sidebar_inactive"}
                        className="button_sidebar_inactive"
                        key={index}
                        onClick={() => setCategoryId(category.id)}
                    >
                        {category.name}
                    </button>
                );
            })}
        </div>
    );
}
