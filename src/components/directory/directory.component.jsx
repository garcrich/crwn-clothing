import CategoryItem from '../directory-item/directory-item.component';
import categories from './categories.data'
import './directory.styles.scss';



const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div> 
  );
}

export default Directory;
