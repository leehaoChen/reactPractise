import React from 'React'
import {
	PropTypes
} from 'react-router'
export default class Curse extends React.Component {

	componentWillMount() {

	}
	render() {
		return (<div>{this.props.params.id}</div>)
	}

}
Curse.contextTypes = {
	history: PropTypes.history
}