import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Categories: FunctionComponent = () => {
  return (
    <div>
      Categories
      <Link className="navbar-brand brand-logo" to="/">Home</Link>
    </div>
  )
}

export default Categories
