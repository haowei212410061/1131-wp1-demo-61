import { useState, useEffect } from 'react'
import Blog_61 from '../../components/Blog_61'
import MenuItem_61 from '../../components/mid_xx/MenuItem_61'
import Wrapper from '../../assets/wrappers/Menu_61'
// let api_url = `http://localhost:3000/api/blog_xx`

import { supabase } from '../../db/clientSupabase'
const P4Page_61 = () => {
  const [menu, setMenu] = useState([])
  const [category, setCategory] = useState('')
  const fetchMenuByCategoryFromSupabase = async () => {
    try {
      if (category === '') {
        let { data, error } = await supabase.from('menu_61').select('*')
        // const response = await fetch(api_url)
        // const data = await response.json()
        console.log(`supabase menu ${category}`, data)
        setMenu(data)
      } else {
        let { data, error } = await supabase
          .from('menu_61')
          .select('*')
          .eq('category', category)
        // const response = await fetch(api_url)
        // const data = await response.json()
        console.log(`supabase menu ${category}`, data)
        setMenu(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuByCategoryFromSupabase()
  }, [category])

  const changeMenuFilter = (Category) => {
    setCategory(Category)
  }

  return (
    <Wrapper>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                data-id='all'
                onClick={() => changeMenuFilter('')}
              >
                all
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='breakfast'
                onClick={() => changeMenuFilter('breakfast')}
              >
                breakfast
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='lunch'
                onClick={() => changeMenuFilter('lunch')}
              >
                lunch
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='dessert'
                onClick={() => changeMenuFilter('dessert')}
              >
                dessert
              </button>
              <button
                type='button'
                className='filter-btn'
                data-id='shakes'
                onClick={() => changeMenuFilter('shakes')}
              >
                shakes
              </button>
            </div>
            <div className='section-center'>
              {menu?.map((item) => {
                const { id, img, title, price, category, descrip } = item
                return (
                  <MenuItem_61
                    key={id}
                    id={id}
                    img={`${img}`}
                    title={title}
                    category={category}
                    price={price}
                    descrip={descrip}
                  />
                )
              })}
            </div>
          </section>
        </div>
      </section>
    </Wrapper>
  )
}
export default P4Page_61
