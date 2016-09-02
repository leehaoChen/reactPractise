import React from 'React'
import {
	History
} from 'react-router'
var About = React.createClass({
	mixins: [History],
	render() {
		return (
			<div>
        <div onClick={() => this.history.pushState(null, 'home/leo')}>Go to foo</div>
        <div onClick={() => this.history.replaceState(null, 'bar')}>Go to bar without creating a new history entry</div>
        <div onClick={() => this.history.goBack()}>Go back</div>
     </div>
		)
	}
})
module.exports = About