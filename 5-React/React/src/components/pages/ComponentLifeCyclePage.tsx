import { Component } from "react";

interface Iprops {}
interface Istate {
  counter: number;
  products: any[];
}

interface IProduct {
  id: number;
  title: string;
}

export default class ComponentLifeCyclePage extends Component<Iprops, Istate> {
  
  
  // ** Component Life Cycle

  constructor(props: Iprops) {
    super(props);
    this.state = {
      counter: 0,
      products: [],
    };
  }

  // TODO Fetching data from an API when the component mounts
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ products: data.products });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  // TODO Cleanup code for enterng another page
  componentWillUnmount(): void {
    console.log("ProductsPage component is unmounting");
  }

  // TODO Updating the component when the state changes
  componentDidUpdate(prevState: Istate) {
    if (prevState.products !== this.state.products) {
      console.log("Products updated:", this.state.products);
    }
  }

  // ** ------------------------------------------------------------------
  
  // ** Component Render
  render() {
    return (
      <>
        <div className="max-w-4xl mx-auto py-4">
          <h1 className="text-2xl font-bold mb-4">Component Life Cycle</h1>
          <p className="mb-4">
            This page demonstrates the component life cycle in React.
          </p>
        </div>

        <div className="max-w-4xl mx-auto py-4">
          <p className="text-2xl font-bold mb-4">Counter</p>
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold">Counter: {this.state.counter}</p>
            <button
              onClick={() => this.setState({ counter: this.state.counter + 1 })}
              className=" border p-4 rounded-lg shadow-sm px-4 py-2  hover:bg-gray-300 transition duration-200"
              >
              Increase Counter
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-2xl font-bold mb-6">Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {this.state.products &&
              this.state.products.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-sm"
                >
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                </div>
              ))}
          </div>

        </div>
      </>
    );
  }
}
