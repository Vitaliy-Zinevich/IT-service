import React from 'react';

// type CategoriesProps = {
//   value: number;
//   onClickCategory: (i: number) => void;
// };


const Categories: React.FC = () => {
  
  const categories = ['Программирование', 'Дизайн', 'Игры', 'Маркетинг'];
  
  const [activeIndex, setActiveIndex] = React.useState(5);

  // const onClickCategory = (i: number) => {
  //   setActiveIndex(i);
  // };
 
  return (
    <div className="categories">
      <ul>
        { categories.map( (value, i) => ( 
        <li onClick={() => {setActiveIndex(i)}} className={activeIndex == i ? 'active' : ''}>
          {value}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories;
