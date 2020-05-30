import React from "react";
import Product from "../components/Product";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: {},
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dogs: data
        })
      });
  }

  render() {
    return(
      <Product image={this.state.dogs}/>
    )
    // const newDetails = this.state.dogs.map((dog) => <Product details={dog} />);
    // return { newDetails };
  }
}

export default ProductList;
