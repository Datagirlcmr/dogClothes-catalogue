import React from "react";
import Product from "../components/Product";

// const apiUrl = "https://dog.ceo/dog-api/";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      breeds: {},
    };
  }


  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          breeds: data,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div>
        <Product breeds={this.state.breeds} />
      </div>
    );
  }
}

export default ProductList;
