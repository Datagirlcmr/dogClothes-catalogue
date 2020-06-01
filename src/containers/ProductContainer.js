import React from "react";
import BreedComponent from "../components/BreedComponent";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: [],
      images: [],
    };
  }

  componentDidMount() {
    const allBreedsEndpoint = "https://dog.ceo/api/breeds/list/all";
    fetch(allBreedsEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const { message } = data;
        const breedsCat = Object.keys(message);
        this.setState({
          breed: breedsCat,
        });
      })
      .catch((error) => console.log(error));

    const breedName = this.state.breed;
    breedName.forEach((breed) => {
      const allImagesEndpoint = `https://dog.ceo/api/breed/${breed}/images`;
      fetch(allImagesEndpoint)
        .then((response) => response.json())
        .then((data) => {
          const { message } = data;

          // const firstImages = [];
          // breedName.forEach(breed => {
          //   let [coverImg, ...rest] = message;
          //   firstImages.push(coverImg);
          // });
          this.setState({
            images: message,
          });
        })
        .catch((error) => console.log(error));
    });
  }

  // handleClick() {

  // }

  render() {
    return (
      <div>
        <BreedComponent breeds={this.state.breed} />
        {console.log(this.state.images)}
      </div>
    );
  }
}

export default ProductContainer;
