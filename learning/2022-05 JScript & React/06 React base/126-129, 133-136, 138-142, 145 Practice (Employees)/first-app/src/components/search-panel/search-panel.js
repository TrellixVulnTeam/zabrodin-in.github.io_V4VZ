import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    onEmpSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onEmpSearch(term);
    }

    render() {
        return (
            <input type="text" 
            className="form-control search-input" 
            placeholder="Find an employee" 
            value={this.state.term} 
            onChange={this.onEmpSearch} />
        )
    }
}

export default SearchPanel;