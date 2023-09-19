import { useSelector } from "react-redux";

const ActiveCategory = () => {
    const activeCategoryName = useSelector(
        (state) => state.categories.activeCategory
    );
    const activeCategory = useSelector((state) =>
        state.categories.categories.find(
            (cat) => cat.normalized_name === activeCategoryName
        )
    );

    return (
        <div>
            <h2>{activeCategory?.display_name}</h2>
            <p>{activeCategory?.description}</p>
        </div>
    );
};

export default ActiveCategory;
