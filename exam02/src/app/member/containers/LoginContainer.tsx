'use client'
import { useState, useActionState } from 'react'
import { processLogin } from '../services/actions'
import LoginForm from '../components/LoginForm'
const LoginContainer = () => {
  const [form, setForm] = useState<{ email?: string; password?: string }>({})
  const actionState = useActionState(processLogin, form)
  // 서버컴포넌트에 연결할때 필요함함
  const handleChange = (e) =>
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))

  return (
    <LoginForm actionState={actionState} form={form} onChange={handleChange} />
  )
}

export default LoginContainer
