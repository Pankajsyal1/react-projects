import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className={'title'}><em>No page Found</em></h1>
      <p className="mx-auto max-w-xl mb-3">We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist. It may have been moved, deleted, or the URL could be incorrect.</p>
      <Link to="/" className="underline">Back to Home</Link>
    </div>
  )
}

export default NotFound