import React from 'React'
import {
	PropTypes
} from 'react-router'
export default class Curse extends React.Component {
	render() {
		return (<div>id 是：{this.props.params.id}</div>)
	}

}