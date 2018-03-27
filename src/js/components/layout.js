import React from 'react'
import { connect } from 'react-redux'
import { fetchBear, addBears, updateBears, deleteBears } from '../actions/index'

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value0: ''
        };
        this.input
        this.input1
        this.input2
        this.inputId1
        this.inputId2
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleSubmitEdit = this
            .handleSubmitEdit
            .bind(this);
        this.handleSubmitDelete = this
            .handleSubmitDelete
            .bind(this);

    }

    handleChange(event, i) {
    }
    componentDidMount() {
        console.log(1)
        this.props.dispatch(fetchBear())

    }

    handleSubmit() {
        console.log(this.input.value)
        this.props.dispatch(addBears({ name: this.input.value || 'papa bear' }))
    }
    handleSubmitEdit() {
        this.props.dispatch(
            updateBears(
                {
                    name: this.input1.value || 'papa bear',
                    _id: this.inputId1.value
                }
            )
        )
    }
    handleSubmitDelete() {
        this.props.dispatch(
            deleteBears(
                {
                    _id: this.inputId2.value
                }
            )
        )
    }
    render() {
        console.log(this.props.bears)
        let bears = this.props.bears.bears
        let list = null
        list = bears.map(bear => {
            console.log(bear)
            return (<li key={bear._id}>{bear._id} : {bear.name}</li>)
        })

        return (
            <div>
                {list ? (<ul>{list.map(li => li)}</ul>) : null}
                <form onSubmit={e => {
                    console.log('hello')
                    e.preventDefault()
                }
                }>
                    <input ref={node => {
                        this.input = node
                    }} />
                    <input type="submit" onClick={this.handleSubmit} />
                </form>
                <form onSubmit={e => {
                    e.preventDefault()
                }
                }>
                    <input ref={node => {
                        this.inputId1 = node
                    }} />
                    <input ref={node => {
                        this.input1 = node
                    }} />
                    <input type="submit" onClick={this.handleSubmitEdit} />
                </form>
                <form onSubmit={e => {
                    e.preventDefault()
                }
                }>
                    <input ref={node => {
                        this.inputId2 = node
                    }} />
                    <input type="submit" onClick={this.handleSubmitDelete} />
                </form>
            </div>
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