'use client'

import { useState } from 'react'

const colors: string[] = ['gray', 'red', 'blue', 'green', 'skyblue', 'orange']

const ColorBox = (): React.ReactNode => {
  const [selected, setSelected] = useState<string>('gray')
  const [border, setBorder] = useState<string>('black')

  const handelClick = (coler) => setSelected(coler)

  const handleChange = (e) => {
    console.log('타이핑!', this)
    console.log('입력한 값: ', e.target.value)
    console.log('이벤트 발생 요소:', e.target)
    setBorder(e.target.value)
  }

  return (
    <>
      <ColorTabs onClick={handelClick} />
      <input
        type="text"
        placeholder="색상을 입력하세요"
        onChange={handleChange}
      />
      <div
        style={{
          background: selected,
          width: 300,
          height: 300,
          borderWidth: 10,
          borderStyle: 'solid',
          borderColor: border,
        }}
      ></div>
    </>
  )
}

// 넘어온 onClick은 속성값임.
const ColorTabs = ({ onClick }) => {
  const tabStyle = {
    display: 'flex',
    height: 100,
    width: 500,
  }
  return (
    <div style={tabStyle}>
      {colors.map((color) => (
        <div
          onClick={() => onClick(color)}
          key={color}
          style={{ background: color, width: 0, flexGrow: 1 }}
        ></div>
      ))}
    </div>
  )
}

export default ColorBox
