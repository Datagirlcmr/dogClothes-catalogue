import React from "react";
import BreedComponent from "../components/BreedComponent";
import ImageComponent from '../components/ImageComponent';

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: [],
      images: [],
    };
  }

  componentDidMount() {
    const getallBreeds =()=> {
      const coverImg = [];
      const allBreedsEndpoint = "https://dog.ceo/api/breeds/list/all";
      fetch(allBreedsEndpoint)
        .then((response) => response.json())
        .then((data) => {
          const { message } = data;
          let breedsCat = Object.keys(message);
      
          this.setState({
            breed: breedsCat,
          })

          breedsCat.forEach((breed) => {
            (async () => {
              const breedImages = await getImagebyBreed(breed);
              coverImg.push(breedImages[0]);
              this.setState({
                images: coverImg
              })
            })();
          });
        })
        .catch((error) => console.log(error));
    }

    async function getImagebyBreed(breed) {
      // console.log(breed)
      const allImagesEndpoint = `https://dog.ceo/api/breed/${breed}/images`;
      const response = await fetch(allImagesEndpoint);
      const data = await response.json();
      const { message } = data;
      return await message;
      // console.log(message)
    }
    getallBreeds();
  }

  // handleClick() {

  // }

  render() {
    return (
      <div>
        <BreedComponent breeds={this.state.breed} />
        <ImageComponent images={this.state.images} />
      </div>
    );
  }
}

export default ProductContainer;
