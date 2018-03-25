import React from 'react'
import {connect} from 'react-redux'
import {fetchBear} from '../actions/index'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: ''
        };
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        
    }

    handleChange(event,i) {
    }
    componentDidMount(){
        console.log(1)
        this.props.dispatch(fetchBear()) 
    }
 
    handleSubmit(event) {
    }
    
    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}


const mapStateToProps = store => {
    return {
        bears: store.bears
    }
}
Layout = connect(mapStateToProps)(Layout)
export default Layout