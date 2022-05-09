import './thankyou.css'

function ThankYou() {
  return (
    <div className="thank">
        <h2 className='order'>
            Order SuccessFull!
        </h2>
      <div className="tick">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0G8vV86yHEjnqfm6UrD-wnOyQzEeLnhcgQ&usqp=CAU"
          alt=""
        />
      </div>
      <h1 className="thank_message">Thank You For Shoping With US!</h1>
      <h3 className="thank_qoute">The Package has been lovingly wrapped by:</h3>
      <div className="logomytheres">
        <img
          src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220505T182235"
          alt=""
        />
      </div>
    </div>
  )
}

export default ThankYou
