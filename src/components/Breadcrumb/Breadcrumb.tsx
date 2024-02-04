import { Link, useLocation } from 'react-router-dom'
import { useDarkMode } from 'context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Breadcrumb = () => {
  const location = useLocation()
  const { isDark } = useDarkMode()

  const getBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter((path) => path !== '')

    return paths.map((path, index) => ({
      path,
      url: `/${paths.slice(0, index + 1).join('/')}`
    }))
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <nav className={`${isDark ? 'text-green-300' : 'text-green-700'} py-2`}>
      <ul className="flex items-center text-sm font-medium">
        <li className="mr-2 p-1">
          <Link to="/" className="hover:underline">
            <FontAwesomeIcon icon={faHome} className="mr-1" />
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path} className="flex items-center">
            <span className="mr-2">&#187;</span>
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-500 capitalize">{breadcrumb.path}</span>
            ) : (
              <Link to={breadcrumb.url} className="hover:underline capitalize">
                {breadcrumb.path}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Breadcrumb
