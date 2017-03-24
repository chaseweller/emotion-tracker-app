




const createNewUser = ({ email, password, username }) => {
  this.props.firebase.createUser(
    { email, password },
    {username, email}
  )

}

createNewUser({
  email: 'test@test.com',
  password: 'testest1',
  username: 'tester'
})