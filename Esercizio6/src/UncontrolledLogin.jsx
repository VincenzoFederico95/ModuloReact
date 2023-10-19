export function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.namedItem('username').value;    
        const password = event.target.elements.namedItem('password').value;
        const data = {
            username,
            password
        }
        console.log(data);
    }


  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button>Login</button>
      <button>Reset</button>
    </form>
  )
}