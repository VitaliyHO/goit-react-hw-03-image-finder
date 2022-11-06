import './App.css';
import React, { Component } from 'react';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { fetchImages } from './Helpers/PixabeyApi';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import styles from './styles/styles.css'
import { Button } from './Components/Button/Button';


class App extends Component {

  state = {
    images: [],
    query: '',
    page: 1,
    hits: 0,
  }

  handleSubmitForm = (query) => {
  this.setState ({ query })
}

componentDidUpdate(_, prevState) {
  const { query, page } = this.state;

  if (prevState.query !== query || prevState.page !== page) {
    fetchImages(query, page).then((data) => {
      this.setState(prev => ({ images: [...prev.images, ...data.hits] }))
      console.log('DU: ', data);
    });
  }
}

render() {
  return (
    <div className="App">
      <SearchBar handleSubmit={this.handleSubmitForm} />
      <ImageGallery images={this.state.images}/>
      <Button/>
    </div>
  );
}}

export default App;



// componentDidUpdate(_, prevState) {
//   const { query, page } = this.state;
//   if (prevState.query !== query || prevState.page !== page) {
//     this.setState({ isLoading: true });
//     fetchImages(query, page)
//       .then(data => {
//         this.setState(prev => ({
//           images: page === 1 ? data.hits : [...prev.images, ...data.hits],
//           totalHits:
//             page === 1
//               ? data.totalHits - data.hits.length
//               : data.totalHits - [...prev.images, ...data.hits].length,
//         }));
//       })
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   }
// }


// totalHits:
//             page === 1
//               ? data.totalHits - data.hits.length
//               : data.totalHits - [...prev.images, ...data.hits].length,
