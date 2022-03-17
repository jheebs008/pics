import React from 'react';

// Using class based component in order to implement state
class SearchBar extends React.Component {
    
    // [[Alternative way instead of creating a method is, onChange = {(event) => console.log(event.target.value)}]]
    // [[Rather than onChange = {this.onInputChange}, calling the onInputChange]]

    // Method to detect change of text inside the input
    // Event handler
    //onInputChange(event) {
        // console.log(event.target.value); to see what we get
        // e => this.setState({ term: e.target.value }); to change state(term) to value typed in
    //}
    

    state = { term: '' };

    //Udemy: Modern React with Reddux, L.91
    // Good to use for callback functions
    onFormSubmit = event => {
        // To prevent the app from refreshing after hitting enter in the searchbar
        event.preventDefault();

        // Call callback from parent component
        // To reference onSubmit in the Adult class(App.js)
        // Child => Adult
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            // form is wrapped with div with a className of ui segment
            // Notice we implement this.onInputChange (callback function) in curly brackets for the new prop onChange.
            // Also, notice we didn't do this.onInputChange(), this would call the method everytime  
            // the render method is called (Component is rendered). Rather we want to call it only when the input changes.
            // Alternate method onSubmit={(event) => this.onFormSubmit(event)}, if we remove = & => from onFormSumbit method abv ^^^^^^
            // like so onFormSubmit(event) {
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Image Search </label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;