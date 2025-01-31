'use client'
import { useLayoutEffect, useState } from 'react'

type RestaurantType = {
  seq: number
  category: string
  address: string
  name: string
  latitude: number // 위아래
  longitude: number // 좌우
}

const Restaurant = () => {
  const [limit, setLimit] = useState<number>(10)
  const [items, setItems] = useState<RestaurantType | undefined>()

  useLayoutEffect(() => {
    const url = `http://restaurant-service.koreait.xyz/restaurant/search?lat=37.5106297&lon=126.7246897&limit=${limit}`
    ;(async () => {
      const res = await fetch(url)
      const items = await res.json()
      setItems(items) // 렌더링이 다시됨.
      // console.log(items) // 최초에 한번 데이터를 가져올거임
    })()
  }, [items, limit])
  console.log('items', items)

  /* // 요소가 2개 이상일때는 중괄호도 추가해줘야함
  // 반복되는 요소는 키값이 무조건 있어야함
  return (
    <ul>
      {items &&
        items.map(
          (item: RestaurantType): React.ReactNode => (
            <li key={item.seq}>
              <span>{item.category}</span>
              <span>{item.name}</span>
            </li>
          ),
        )}
    </ul>
  )
}*/

  return (
    <ul>
      {items &&
        items.map((item) => <RestaurantItem key={item.seq} item={item} />)}
    </ul>
  )
}

// 많은 부분이 반복되면 컴포넌트로 따로 빼서 하는 방법도 있음
const RestaurantItem = ({ item }): React.ReactNode => {
  const { category, name } = item
  return (
    <li>
      <span>{category}</span>
      <span>{name}</span>
    </li>
  )
}

export default Restaurant
