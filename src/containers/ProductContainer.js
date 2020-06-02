import React from "react";
import BreedComponent from "../components/BreedComponent";
import ImageComponent from "../components/ImageComponent";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breed: [],
      images: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const getallBreeds = () => {
      const coverImg = [];
      const allBreedsEndpoint = "https://dog.ceo/api/breeds/list/all";
      fetch(allBreedsEndpoint)
        .then((response) => response.json())
        .then((data) => {
          const { message } = data;
          let breedsCat = Object.keys(message);

          this.setState({
            breed: breedsCat,
          });

          breedsCat.forEach((breed) => {
            (async () => {
              const breedImages = await getImagebyBreed(breed);
              let [firstImg, ...rest] = breedImages;
              coverImg.push(firstImg);
              rest = this.handleClick;
              this.setState({
                images: coverImg,
              });
            })();
          });
        })
        .catch((error) => console.log(error));
    };

    async function getImagebyBreed(breed) {
      const allImagesEndpoint = `https://dog.ceo/api/breed/${breed}/images`;
      const response = await fetch(allImagesEndpoint);
      const data = await response.json();
      const { message } = data;
      return await message;
    }
    getallBreeds();
  }

  handleClick() {
    console.log("ok");
  }

  render() {
    return (
      <div>
        <BreedComponent breeds={this.state.breed} />
        <ImageComponent
          images={this.state.images}
          breeds={this.state.breed}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ProductContainer;
