import React from 'React'
import {
	PropTypes
} from 'react-router'
const ActiveLink = function(props) {
	return (<Link activeStyle={{color:"red"}} active {...props}></Link>)
}
export default class Home extends React.Component {
	render() {
		return (<div className="home">
             <div onClick={()=>this.context.history.pushState(null,"/home/123")}>go to 123</div>
              <div onClick={()=>this.context.history.pushState(null,"/home/leo")}>go to leo</div>
               <div onClick={()=>this.context.history.pushState(null,"/home/jaywll")}>go to jaywll</div>
             <hr/>
             {this.props.children}
          </div>)

	}

}
Home.contextTypes = {
	history: PropTypes.history
}