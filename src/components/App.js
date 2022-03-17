import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
state = {images: [] };

    // Asynchronous API request therefore to interact with it we have to us a 'Promise' or asynchronous
    // await syntax below
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },     
              // Alt to get a response from asynchronous request (the Promise), more info on Sec.7(L.79)
        });  //.then((response) => {
             // console.log(response.data.results);
            //});
        this.setState({ images: response.data.results });
    }

    // className of ui container fixes awkward full page width search bar
    // Manual style implemented, to make it look better
    render() {
            return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
            
        );
    }
    
}

export default App;