

function App() {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data)=>{
      setProducts(data)
    })
    .catch(err => console.error(err))
  },[])

  return (
    <div>
      <h1 id='appTitle'><span>X</span>perience</h1>
      <Navbar/>
      <Routes>
        {/* Define the route tags here */}
        <Route path='/' element={<Home products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
