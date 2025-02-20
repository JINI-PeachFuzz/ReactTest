'use client'
import JoinForm from '../components/JoinForm'
import { processJoin } from '../services/actions'
import { useActionState, useState } from 'react'

type FormType = {
  email?: string
  password?: string
  confirmPassword?: string
  name?: string
  agree?: boolean
}

// 지역변수를 쓰는건 바람직하지 않음
// 랜더링되기 때문에 값이 초기화가 되기 때문에
const JoinContainer = () => {
  const [form, setForm] = useState<FormType>({})
  const actionState = useActionState(processJoin, {})

  const handleChange = (e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }

  const handleToggle = () => {
    setForm((form) => ({ ...form, agree: !Boolean(form.agree) }))
  }

  return (
    <JoinForm
      actionState={actionState}
      onChange={handleChange}
      onToggle={handleToggle}
      form={form}
    />
  )
}

export default JoinContainer
