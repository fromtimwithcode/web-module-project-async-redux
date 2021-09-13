import { useState } from 'react';
import { connect } from 'react-redux';
import { getGifs } from '../actions/index';

const GifForm = (props) => {
    const { getGifs } = props;

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        getGifs(searchTerm);
    }

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button>Search</button>
        </form>
    )
}

const mapActionsToProps = () => {
    return {
        getGifs
    }
}

export default connect(null, mapActionsToProps())(GifForm);