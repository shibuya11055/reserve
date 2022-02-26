import reserveAxios from '@/lib/reserveAxios'

const onClickLogin = async () => {
  const res = await reserveAxios.post('/auth/owners/sign_in', {
    email: 'test1@example.com',
    password: 'password1234!',
  })

  console.log(res.data)
}
function OwnersLogin() {
  return (
    <div>
      <p>ログイン画面</p>
      <button type="button" onClick={onClickLogin}>
        ログイン
      </button>
    </div>
  )
}

export default OwnersLogin
