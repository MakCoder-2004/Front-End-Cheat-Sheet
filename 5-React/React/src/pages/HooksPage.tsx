import { useEffect, useState } from "react";

const HooksPage = () => {
  
  // ** States
  
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  // ** ----------------------------------------------------------------

  // ** Hooks

  // TODO This useEffect will run only once when the component mounts
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  // TODO This useEffect will run every time the component "counter" re-renders
  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  // TODO This useEffect will clean up after itself when the component unmounts
  useEffect(() => {
    return () => {
      console.log("Cleanup after unmounting cleanup");
    };
  }, []);

  // TODO Requesting Data from API
  useEffect(() => {
    //  Request Cancelation (abort)
    //  The AbortController is used to cancel the fetch request if the component unmounts before the request completes    
    const controller = new AbortController();
    const signal = controller.signal; 
    
    // This useEffect will fetch products from an API and set them to the products state
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", { signal });
        const jsonData = await response.json();
        setProducts(jsonData.products);
        
        //or
        const response2 = await(await fetch("https://dummyjson.com/products", { signal })).json();
        setProducts(response2.products);

      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };
    // or (IIFE)
    (async()=>{
      try {
        const response2 = await(await fetch("https://dummyjson.com/products", { signal })).json();
        setProducts(response2.products);

      } catch (error) {
        console.log("Error fetching products:", error);
      }
    })()

    fetchProducts();

    // Clean up the request when the component unmounts
    return () => {
      controller.abort()
    };
  }, []);

  // ** ----------------------------------------------------------------


  return (
    <>
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4">Hooks Page</h1>
        <p className="mb-4">This page demonstrates the use of React hooks.</p>
      </div>
      
      <div className="max-w-4xl mx-auto py-4">
        <p className="text-2xl font-bold mb-4">Counter</p>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">Counter: {counter}</p>
          <button
            onClick={() => setCounter(counter + 1)}
            className=" border p-4 rounded-lg shadow-sm px-4 py-2  hover:bg-gray-300 transition duration-200"
          >
            Increase Counter
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ id, title }: { id: number; title: string }) => (
            <div key={id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">{title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HooksPage;
