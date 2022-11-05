import React, { Component } from 'react';

export class SearchBar extends Component {
    state = {
        query: '',
    }

    handleChange = ({ target: { value: query } }) => {
        this.setState({ query })
    }

    handleSubmitForm = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.query)
    }

    render() {
        return (
            <header className='Searchbar'>
                <form onSubmit={this.handleSubmitForm} className='SearchForm'>
                    <button type="submit" className='SearchForm-button'>
                        <span className='SearchForm-button-label'>Search</span>
                    </button>

                    <input
                        onInput={this.handleChange}
                        className='SearchForm-input'
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}   