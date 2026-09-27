// function Student(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Course: {props.course}</p>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <Student name = "Daniyal" course="React"/>
//       <Student name = "Ali" course = "JavaScript"/>
//       <Student name = "Sara" course = "Node.js"/>
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>Price: {props.price}</h2>
//       <p>Category: {props.category}</p>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <Product name= "Laptop" price= {100000} category="Electronics"/>
//       <Product name="Phone" price={50000} category="Electronics"/>
//       <Product name= "Shoes" price= {5000} category= "Fashion"/>
//     </div>
//   );
// }

// function Product({name, price, category}) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>Price: {price}</h2>
//       <p>Category: {category}</p>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <Product name= "Laptop" price= {100000} category="Electronics"/>
//       <Product name="Phone" price={50000} category="Electronics"/>
//       <Product name= "Shoes" price= {5000} category= "Fashion"/>
//     </div>
//   );
// }

// function Product({name, price, category, inStock}) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <h2>Price: {price}</h2>
//       <p>Category: {category}</p>
//       <p>In Stock: {inStock}</p>
//     </div>
//   );
// }

// function App(){
//   return (
//     <div>
//       <Product name= "Laptop" price= {100000} category="Electronics" inStock = {true}/>
//       <Product name= "Shoes" price= {5000} category= "Fashion" inStock = {false}/>
//     </div>
//   );
// }

// function Button({ onClick }) {
//   return (
//     <button onClick={onClick}>Click me</button>
//   );
// }

// function App() {
//   function handleClick() {
//     console.log("Hello from App");
//   }
//   return (
//     <div>
//       <Button onClick={handleClick} />
//     </div>
//   );
// }

// function ProductButton({name, onSelect}){
//   return(
//     <button onClick={onSelect}>{name}</button>
//   );
// }

// function App() {
//   function handleSelect(name){
//     console.log("Selected: ", name);
//   }

//   return (
//     <div>
//       <ProductButton

//       name = "Laptop"
//       onSelect = {()=>handleSelect("Laptop")}

//       />

//       <ProductButton 

//       name= "Phone"
//       onSelect={()=>handleSelect("Phone")}
//       />

//       <ProductButton

//       name= "Shoes"
//       onSelect={()=>handleSelect("Shoes")}
//       />
//     </div>
//   );
// }



// function App(){
//   function handleClick(event){
//     console.log(event);
//   }

//   return(
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   )

// }

// function App() {

//     function handleClick(event) {
//         console.log("Button clicked");
//         console.log(event);
//         console.log(event.target);
//         console.log(event.target.textContent);
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// function App(){
//   function handleClick(event){
//     console.log("Selected:", event.target.textContent);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Laptop</button>
//       <button onClick={handleClick}>Phone</button>
//       <button onClick={handleClick}>Shoes</button>
//     </div>
//   );
// }


// import { useState } from "react";

// function App(){
//   const [count,setCount] = useState(0);

//   function Increment(){
//     setCount(prevCount => prevCount + 1);
//   }

//   function Decrement(){
//     setCount(prevCount => prevCount - 1);
//   }

//   function reset(){
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={Increment}>
//         +
//       </button>
//       <button onClick={Decrement}>
//         -
//       </button>
//       <button onClick={reset}>
//         Reset
//       </button>
//     </div>
//   )
// }

// import { useState } from "react";

// function App(){
//   const [name, setName] = useState("Daniyal");
//   const [age, setAge] = useState(20);
//   const [status, setStatus] = useState("No");

//   function changeName(){
//     setName("Ahmed");
//   }
//   function increaseAge(){
//     setAge(age+1);
//   }
//   function setOnline(){
//     setStatus("Yes");
//   }

//   return(
//     <div>

//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h2>Online: {status}</h2>

//       <button onClick={changeName}>
//         Change Name
//       </button>

//       <button onClick={increaseAge}>
//         Increase Age
//       </button>

//       <button onClick={setOnline}>
//         Go Online
//       </button>

//     </div>
//   )
// }


// import { useState } from "react";

// function App() {
//   const [isOnline, setIsOnline] = useState(false);

//   function Online() {
//     setIsOnline(true);
//   }
//   function Offline() {
//     setIsOnline(false);
//   }

//   return (
//     <div>
//       <h1>
//         {isOnline ? "You are online" : "You are offline"}
//       </h1>

//       {
//         isOnline? (
//           <button onClick={Offline}>Go Offline</button>
//         ) : (
//           <button onClick={Online}>
//             Go Online
//           </button>
//         )
//       }
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [showMessage, setShowMessage] = useState(false);

//   function settingShowMessage() {
//     setShowMessage(true);
//   }

//   return (
//     <div>
//       <button onClick={settingShowMessage}>Show Message</button>

//       {showMessage && <p>Hello! You clicked the button.</p>}
//     </div>
//   )
// }

// import { useState } from "react";

// function App(){
//   const products = ["LAptop", "Phone", "Keyboard"];

//   return (
//     <div>
//       <h1>Products</h1>

//       {
//         products.map(product => (
//           <h2>{product}</h2>
//         ))
//       }
//     </div>
//   )
// }

// import {useState} from "react";

// function App(){
//   const fruits = ["Apple", "Banana", "Mango", "Orange"];

//   return (
//     <div>
//       <h1>Fruits:</h1>

//       {fruits.map(
//         fruit => (
//           <p>{fruit}</p>
//         )
//       )}
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//     { id: 3, name: "Keyboard" }
//   ];

//   return (
//     <div>
//       {
//         products.map(product => (
//           <p key={product.id}>
//             {product.name}
//           </p>
//         ))
//       }
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [addedProduct, setAddedProduct] = useState("");

//   const products = [
//     { id: 1, name: "Laptop" },
//     { id: 2, name: "Phone" },
//     { id: 3, name: "Keyboard" }
//   ];

//   function addProduct(productName) {
//     setAddedProduct(productName);
//   }

//   return (
//     <div>
//       <h1>Products</h1>

//       {
//         products.map(
//           product => (
//             <div key={product.id}>
//               <span>{product.name}</span>

//               <button onClick={() => addProduct(product.name)}>
//                 Add
//               </button>
//             </div>
//           )
//         )
//       }

//       {
//         addedProduct && (
//           <p>Added: {addedProduct}</p>
//         )
//       }
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [selectedProduct, setSelectedProduct] = useState("");

//   const products = [
//     { id: "1", name: "Laptop" },
//     { id: "2", name: "Phone" },
//     { id: "3", name: "Keyboard" }
//   ];

//   function selectProduct(productName) {
//     setSelectedProduct(productName)
//   }

//   return (
//     <div>
//       <h1>Products</h1>
//       {
//         products.map(
//           product => (
//             <div key={product.id}>
//               <span>{product.name}</span>

//               <button onClick={() => selectProduct(product.name)}>
//                 Add
//               </button>
//             </div>
//           )
//         )
//       }

//       {
//         selectedProduct && <p>Selected: {selectedProduct}</p>
//       }
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [person, setPerson] = useState({
//     name: "Daniyal",
//     age: 20,
//     profession: "Developer"
//   });

//   function changeName(){
//     setPerson(
//       {
//         ...person,
//         name: "Ahmed"
//       }
//     )
//   }

//   function increaseAge(){
//     setPerson(
//       {
//         ...person,
//         age: 21
//       }
//     )
//   }

//   function changeProfession(){
//     setPerson(
//       {
//         ...person,
//         profession: "Software Engineer"
//       }
//     )
//   }

//   return (
//     <div>
//       <h1>User Details</h1>
//       <ul>
//         <li>{person.name}</li>
//         <li>{person.age}</li>
//         <li>{person.profession}</li>
//       </ul>

//       <button onClick={changeName}>Change Name</button>
//       <button onClick={increaseAge}>Increase Age</button>
//       <button onClick={changeProfession}>Change Profession</button>
//     </div>


//   )
// }

// import { useState } from "react";

// function App() {
//   const [fruits, setFruits] = useState([
//     "Apple",
//     "Banana"
//   ]);

//   function addFruit(){
//     setFruits(
//       [
//         ...fruits,
//         "Mango"
//       ]
//     )
//   }

//   return (
//     <div>
//       {
//         fruits.map(fruit => (
//           <p key={fruit}>{fruit}</p>
//         ))
//       }

//       <button onClick={addFruit}>Add Mango</button>
//     </div>
//   )
// }

// import { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     "Learn React",
//     "Practice JavaScript",
//     "Build a project"
//   ]);


// function removeTodo(todoRem) {
//   setTodos(
//     todos.filter(todo => todo !== todoRem) 
//   )
// }

// return (
//   <div>
//     {
//       todos.map(
//         todo => (
//           <div key={todo}>
//             <span>{todo}</span>

//             <button onClick={() => removeTodo(todo)}>Remove</button>
//           </div>
//         )
//       )
//     }
//   </div>
// )
// }

// import { useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Effect ran");
//     });

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// import { useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Effect ran");
//     }, []);

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// import { useEffect, useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Count changed:", count);
//     }, [count]);

//     return (
//         <div>
//             <h1>{count}</h1>

//             <button onClick={() => setCount(count + 1)}>
//                 Increase
//             </button>
//         </div>
//     );
// }

// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     document.title = `Count: ${count}`;
//   }, [count]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(()=> {
//     fetch("https://fakestoreapi.com/products")
//     .then(response => response.json())
//     .then(data => {
//       setProducts(data);
//       setLoading(false);
//     })
//   },[]);

//   return (
//     <div>
//       <h1>Products: </h1>
//       {
//         loading? (
//           <p>Loading...</p>
//         ) :
//         (
//           products.map(
//             product => (
//               <p key={product.id}>
//                 {product.title}
//               </p>
//             )
//           )
//         )
//       }
//     </div>
//   )
// }

// import { useRef } from "react";

// function App(){
//   const countRef = useRef(0);

//   function increaseCount(){
//     countRef.current = countRef.current + 1;

//     console.log(countRef.current);
//   }

//   return (
//     <div>
//       <h1>{countRef.current}</h1>
//       <button onClick={increaseCount}>
//         Increase
//       </button>
//     </div>
//   );
// }

// import {useRef} from "react"

// function App(){
//   const inputRef = useRef(null);

//   function focusInput(){
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input ref={inputRef} />

//       <button onClick={focusInput}>
//         Focus Input
//       </button>
//     </div>
//   )
// }

// import { useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const renderCount = useRef(0);

//   renderCount.current++;

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <p>Renders: {renderCount.current}</p>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }

// import { createContext,useContext } from "react";

// const UserContext = createContext();

// function Profile(){
//   const userName = useContext(UserContext);
  
//   return <h1>Hello, {userName}</h1>;
// }


// function App(){
//   const username = "Daniyal";

//   return (
//     <UserContext value={username}>
//       <Profile/>
//     </UserContext>
//   )
// }

//prop drilling

// function Profile({ userName }) {
//   return <h1>Hello, {userName}</h1>;
// }

// function UserMenu({ userName }) {
//   return <Profile userName={userName} />;
// }

// function Navbar({ userName }) {
//   return <UserMenu userName={userName} />;
// }

// function App() {
//   const userName = "Daniyal";

//   return <Navbar userName={userName} />;
// }

//useContext: No Prop drilling

// import { createContext, useContext } from "react";

// const UserContext = createContext();

// function Profile() {
//   const userName = useContext(UserContext);

//   return <h1>Hello, {userName}</h1>;
// }

// function UserMenu() {
//   return <Profile />;
// }

// function Navbar() {
//   return <UserMenu />;
// }

// function App() {
//   const userName = "Daniyal";

//   return (
//     <UserContext value={userName}>
//       <Navbar />
//     </UserContext>
//   );
// }

// import { createContext,useContext,useState } from "react";

// const ThemeContext = createContext();

// function Navbar(){
//   const {theme,setTheme} = useContext(ThemeContext);

//   function toggleTheme(){
//     setTheme(theme === "light" ? "dark" : "light");
//   }

//   return (
//     <nav>
//       <h1>My Website</h1>
//        <p>Current theme: {theme}</p>

//        <button onClick={toggleTheme}>
//         Toggle Theme
//        </button>
//     </nav>
//   )
// }


// function Profile(){
//   const {theme} = useContext(ThemeContext);

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Theme: {theme}</p>
//     </div>
//   );
// }



// function App(){
//   const [theme,setTheme] = useState("light");

//   return (
//     <ThemeContext value={{theme, setTheme}}>
//       <Navbar />
//       <Profile />
//     </ThemeContext>
//   )
// }

//CUSTOM HOOKS

// import { useState } from "react";

// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increment(){
//     setCount(count+1)
//   }

//   function decrement(){
//     setCount(count-1)
//   }

//   return (
//     {
//       count,
//       increment,
//       decrement
//     }
//   )
// }

// function App(){
//   const {count, increment, decrement} = useCounter();

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={increment}>
//         +
//       </button>

//       <button onClick={decrement}>
//         -
//       </button>
//     </div>
//   )
// }

//child-parent communication

// import { useState } from "react";

// function Student({ name, handleSelect }) {
//     function handleClick() {
//         handleSelect(name);
//     }

//     return (
//         <div>
//             <h1>
//                 {name}
//                 <button onClick={handleClick}>Select</button>
//             </h1>
//         </div>
//     )
// }

// function App() {
//     const [selectedStudent, setSelectedStudent] = useState("");

//     function handleSelect(Student) {
//         setSelectedStudent(Student)
//     }

//     return (
//         <div>
//             <Student name="Ali" handleSelect={handleSelect} />
//             <Student name="Ahmed" handleSelect={handleSelect} />
//             <Student name="Sara" handleSelect={handleSelect} />

//             {
//                 selectedStudent && <p>Selected student: {selectedStudent}</p>
//             }
//         </div>
//     )
// }

//lifting state

// import { useState } from "react";

// function Product({quantity,setQuantity}){
//     return (
//         <div>
//             <button onClick={() => setQuantity(quantity+1)}>Add to Cart</button>
//         </div>
//     )
// }

// function Cart({quantity}){
//     return (
//         <h2>Itmes in cart: {quantity}</h2>
//     )
// }

// function App(){
//     const [quantity,setQuantity] = useState(0);

//     return (
//         <div>
//             <Product quantity = {quantity} setQuantity = {setQuantity}/>
//             <Cart quantity = {quantity}/>
//         </div>
//     )
// }

//Controlled Components

// import { useState } from "react";

// function App(){
//     const [username, setUsername] = useState("");

//     return (
//         <div>
//             <label>Username: </label>
//             <input value={username} onChange={(event) => setUsername(event.target.value)} />

//             {username && <p>Hello, {username}</p>}
//         </div>
//     )
// }

//Forms

// import { useState } from "react";

// function App() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();

//         console.log("username: ", username);
//         console.log("Password: ", password);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>
//                         Username: 
//                         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//                     </label>
//                 </div>

//                 <div>
//                     <label>
//                         Password: 
//                         <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//                     </label>
//                 </div>

//                 <button type="submit">
//                     Login
//                 </button>
//             </form>
//         </div>
//     )
// }

//Loading States

// import { useEffect, useState } from "react";

// function App(){
//     const [products, setProducts] = useState("");
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products")
//         .then(response => response.json())
//         .then(
//             data => {
//                 setProducts(data);
//                 setLoading(false);
//             }
//         )
//     },[]);

//     return (
//         <div>
//             <h1>
//                 Products
//             </h1>
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 products.map(product => (
//                     <p key={product.id}>
//                         {product.title}
//                     </p>
//                 ))
//             )}
//         </div>
//     )
// }

// import { useState, useEffect } from "react";

// function App(){
//     const [loading, setLoading] = useState(true);

//     useEffect(() =>{
//         setTimeout(() =>{
//             setLoading(false)
//         },2000)
//     },[])

//     return (
//         <div>
//             {
//                 loading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     <p>Data Loaded!</p>
//                 )
//             }
//         </div>
//     )
// }

//Error States

import { useState, useEffect } from "react";

function App(){
    const [products, setProducts] = useStates([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(
            response => {
                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }

                return response.json();
            }
        )
        .then(
            data => {
                setProducts(data);
                setLoading(false);
            }
        )
        .catch(
            error => {
                setError(error.message);
                setLoading(false);
            }
        )
    },[])

    return (
        <div>
            <h1>Products</h1>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                products.map(
                    product => (
                        <p key={product.id}>
                            {product.title}
                        </p>
                    )
                )
            )}
        </div>
    )
}

export default App;