import React from 'react';
import ProductList from "./ProductList";

const allBreedNameEndpoint = "https://dog.ceo/api/breeds/list/all";

class ApiEndpoints extends React.Component {
  constructor(props) {
    super(props);

    this.setState = {
      breeds: [],
      images: [],
      filterbreed: []
    }
  }

  componentDidMount() {
    // Get all breed name form the endpoint
    async function allBreeds() {
      const response = await fetch(allBreedNameEndpoint);
      const { message } = await response.json();
      const breeds = Object.keys(message);
      // console.log('All breeds: ', breeds);
      return await breeds;
    }

    // Get all images from a breed
    async function imagesFromBreed(breedName) {
      const endPoint = `https://dog.ceo/api/breed/${breedName}/images`;
      const response = await fetch(endPoint);
      const { message } = await response.json();
      return await message;
    }
    

  }

  render() {
    return(
      <div>
        <Product />
      </div>
    )
  }
}

export default ApiEndpoints;
