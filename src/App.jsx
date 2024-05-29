import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <nav>
          <span>
            <Link to="/">🏠</Link>
          </span>
          <ul>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
            <li>
              <Link to="/3">Page 3</Link>
              <span>
                <Link to="/3/special">Extra special</Link>
              </span>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
