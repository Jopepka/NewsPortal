import categoriesBarCSS from './CategoriesBar.module.css'
import Category from './Category/Category';

const CategoriesBar = ({ categories }) => {
    return (
        <div className={categoriesBarCSS.navbar}>
            {categories?.map((link) => <Category key={link.id} toPath={link.toPath} name={link.name} />)}
        </div>
    )
}

export default CategoriesBar;
