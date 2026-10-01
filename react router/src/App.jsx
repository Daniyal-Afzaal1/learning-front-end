import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams, useLocation, Outlet, Navigate } from "react-router-dom"

// function Home() {
//   return <h1>Home Page</h1>
// }

// function Products(){
//   return <h1>Products Page</h1>
// }

// function About(){
//   return <h1>About Page</h1>
// }

// function Contact(){
//   return <h1>Contact Page</h1>
// } 

// function App() {
//   return (
//     <BrowserRouter>

//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/Products">Products</Link>
//       <Link to="/About">About</Link>
//       <Link to="/Contact">Contact</Link>
//     </nav>

//     <Routes>
//       <Route path="/" element = {<Home />}/>
//       <Route path="/Products" element = {<Products />}/>
//       <Route path="/About" element = {<About />}/>
//       <Route path="/Contact" element = {<Contact/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

//with NavLink

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return <h1>Products Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function Navbar() {
//   return (
//     <nav>
//       <NavLink to="/"
//         className={({ isActive }) =>
//           isActive ? "active" : ""
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink to="/Products"
//         className={({ isActive }) =>
//           isActive ? "active" : ""
//         }
//       >
//         Products
//       </NavLink>

//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           isActive ? "active" : ""
//         }
//       >
//         About
//       </NavLink>

//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           isActive ? "active" : ""
//         }
//       >
//         Contact
//       </NavLink>
//     </nav>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

//useNavigate(when js code decides navigation)

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return <h1>Products Page</h1>;
// }

// function Dashboard(){
//   return <h1>Dashboard Page</h1>
// }

// function Login() {
//   const navigate = useNavigate();

//   function handleLogin() {
//     console.log("Login successful");

//     navigate("/Dashboard");
//     //we can go forward or backward also by
//     //navigate(1); and navigate(-1);
//   }

//   return (
//     <div>
//       <h1>Login Page</h1>

//       <button onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// }

// function Navbar() {
//   return (
//     <nav>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/products">Products</NavLink>
//       <NavLink to="/login">Login</NavLink>
//       <NavLink to="/Dashboard">Dashboard</NavLink>
//     </nav>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Dashboard" element = {<Dashboard/>} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

//useParams(reads information from the url)

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return (
//     <div>
//       <h1>Products</h1>

//       <NavLink to="/products/101">
//         Laptop
//       </NavLink>

//       <br />

//       <NavLink to="/products/102">
//         Phone
//       </NavLink>

//       <br />

//       <NavLink to="/products/103">
//         Keyboard
//       </NavLink>
//     </div>
//   );
// }


// function Product() {
//   const { id } = useParams();

//   return (
//     <h1>Product ID: {id}</h1>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <nav>
//         <NavLink to="/">Home</NavLink>
//         {" | "}
//         <NavLink to="/products">Products</NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route
//           path="/products"
//           element={<Products />}
//         />

//         <Route
//           path="/products/:id"
//           element={<Product />}
//         />
//       </Routes>

//     </BrowserRouter>
//   );
// }

//useLocation (It lets a component know where the user currently is in the application.)

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return <h1>Products Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function LocationInfo() {
//   const location = useLocation();

//   return (
//     <div>
//       <h2>Current Path:</h2>
//       <p>{location.pathname}</p>
//     </div>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>

//       <nav>
//         <NavLink to="/">Home</NavLink>
//         {" | "}
//         <NavLink to="/products">Products</NavLink>
//         {" | "}
//         <NavLink to="/about">About</NavLink>

//       </nav>

//       <LocationInfo />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

//Nested Routes + Outlet

// function Home() {
//     return <h1>Home Page</h1>;
// }

// function Dashboard() {
//     return (
//         <div>
//             <h1>Dashboard</h1>

//             <nav>
//                 <NavLink to="profile">Profile</NavLink>
//                 {" | "}
//                 <NavLink to="settings">Settings</NavLink>
//             </nav>

//             <Outlet />
//         </div>
//     );
// }

// function Profile() {
//     return <h2>Profile Page</h2>;
// }

// function Settings() {
//     return <h2>Settings Page</h2>;
// }

// function App() {
//     return (
//         <BrowserRouter>

//             <nav>
//                 <NavLink to="/">Home</NavLink>
//                 {" | "}
//                 <NavLink to="/dashboard">Dashboard</NavLink>
//             </nav>

//             <Routes>

//                 <Route path="/" element={<Home />} />

//                 <Route path="/dashboard" element={<Dashboard />}>

//                     <Route
//                         path="profile"
//                         element={<Profile />}
//                     />

//                     <Route
//                         path="settings"
//                         element={<Settings />}
//                     />

//                 </Route>

//             </Routes>

//         </BrowserRouter>
//     );
// }

//Dynamic Routes

// const products = [
//     {
//         id: 101,
//         name: "Laptop",
//         price: 1000
//     },
//     {
//         id: 102,
//         name: "Phone",
//         price: 500
//     },
//     {
//         id: 1000,
//         name: "Keyboard",
//         price: 100
//     }
// ];

// function Home() {
//     return <h1>Home Page</h1>
// }

// function Products() {
//     return (
//         <div>
//             <h1>Products</h1>

//             {
//                 products.map(product => (
//                     <div key={product.id}>
//                         <h2>{product.name}</h2>

//                         <p>Price: ${product.name}</p>

//                         <NavLink to={`/products/${product.id}`}>
//                             View Product
//                         </NavLink>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

// function ProductsDetails() {
//     const { id } = useParams();

//     return (
//         <div>
//             <h1>Product Details</h1>

//             <p>Product ID: {id}</p>
//         </div>
//     )
// }

// function App() {
//     return (
//         <BrowserRouter>
//         <nav>
//             <NavLink to="/">Home</NavLink>
//             {"|"}
//             <NavLink to="/products">Products</NavLink>
//         </nav>

//         <Routes>
//             <Route path="/" element = {<Home/>}/>
//             <Route path="/products" element = {<Products/>}/>
//             <Route path="/products/:id" element = {<ProductsDetails/>}/>
//         </Routes>

//         </BrowserRouter>
//     )

// }

// function Home() {
//     return (
//         <div>
//             <h1>
//                 Home Page
//             </h1>
//         </div>
//     )
// }
// const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 500 },
//     { id: 3, name: "Mouse", price: 50 }
// ];

// function Products() {
//     return (
//         <div>
//             {
//                 products.map(product => (
//                 <div>
//                     <h2>{product.name}</h2>
//                     <p>Price: ${product.price}</p>
//                     <NavLink to={`/products/${product.id}`}>
//                         View Details
//                     </NavLink>
//                 </div>
//             ))
//             }
//         </div>
//     )
// }

// function ProductsDetails() {
//     const { id } = useParams();
//     return (
//         <div>
//             <h2>Products Details</h2>
//             <p>Product ID: {id}</p>
//         </div>
//     )
// }

// function App() {
//     return (
//         <BrowserRouter>
//             <nav>
//                 <NavLink to="/">
//                     Home
//                 </NavLink>
//                 {"|"}
//                 <NavLink to="/products">
//                     Products
//                 </NavLink>
//             </nav>

//             <Routes>
//                 <Route path="/" element={<Home/>}/>
//                 <Route path="/products" element = {<Products/>}/>
//                 <Route path="/products/:id" element = {<ProductsDetails/>}/>
//             </Routes>
//         </BrowserRouter>
//     )
// }

//404 Routes

// function Home() {
//     return <h1>Home Page</h1>;
// }

// function Products() {
//     return <h1>Products Page</h1>;
// }

// function About() {
//     return <h1>About Page</h1>;
// }

// function NotFound() {
//     return (
//         <div>
//             <h1>404</h1>
//             <h2>Page Not Found</h2>

//             <NavLink to="/">
//                 Go Home
//             </NavLink>
//         </div>
//     );
// }

// function App() {
//     return (
//         <BrowserRouter>

//             <nav>
//                 <NavLink to="/">Home</NavLink>
//                 {" | "}
//                 <NavLink to="/products">Products</NavLink>
//                 {" | "}
//                 <NavLink to="/about">About</NavLink>
//             </nav>

//             <Routes>

//                 <Route path="/" element={<Home />} />

//                 <Route
//                     path="/products"
//                     element={<Products />}
//                 />

//                 <Route
//                     path="/about"
//                     element={<About />}
//                 />

//                 <Route
//                     path="*"
//                     element={<NotFound />}
//                 />

//             </Routes>

//         </BrowserRouter>
//     );
// }

function Home() {
    return <h1>Home Page</h1>;
}

function Login() {
    return <h1>Login Page</h1>;
}

function Dashboard() {
    return <h1>Dashboard Page</h1>;
}

function ProtectedRoute({ isLoggedIn, children }) {

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
}

function App() {

    const isLoggedIn = false;

    return (
        <BrowserRouter>

            <nav>
                <NavLink to="/">Home</NavLink>
                {" | "}
                <NavLink to="/login">Login</NavLink>
                {" | "}
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}



export default App;