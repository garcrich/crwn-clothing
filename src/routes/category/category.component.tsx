

import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner'
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector'

import './category.styles.scss'

type CategoryRouteParams = {
  category: string
}

const Category = () => {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
  const isLoading = useSelector(selectCategoriesIsLoading)
  const categoriesMap = useSelector(selectCategoriesMap)
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
      {
        isLoading ? (
        <Spinner /> 
        ) : (
          <div className='category-container'>
            {products &&
              products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
          </div>
        )
      }
    </>
  )
}

export default Category;