'use client'
import React, { useState, Suspense } from 'react'
//import Message from './Message'
// 이렇게 import 하면 처음부터 가져옴 그래서 react Lazy를 해서 지연로딩시켜야함

const Message = React.lazy(() => import('./Message'))

const Exam06Page = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = () => setVisible(true)

  return (
    <>
      <button type="button" onClick={handleClick}>
        클릭
      </button>
      <Suspense fallback={<div>로딩중...</div>}>
        {visible && <Message />}
      </Suspense>
    </>
  ) // Suspense로 감싸면 지연로딩시키는 곳
  // fallback 은 인터넷이 느릴때 우선적으로 보여주는 거
}

export default Exam06Page
