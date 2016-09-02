import React from 'react'
import ReactDOM from 'react-dom'
import {
	Router,
	Route,
	hashHistory,
	Link,
	Redirect,
} from 'react-router'
import Header from './component/header'
import Home from './component/home'
import About from './component/about'
import Curse from './component/curse'
import Style from './style/main.css'
const ActiveLink = function(props) {
	return (<Link activeStyle={{color:"red"}} active {...props}></Link>)
}
class App extends React.Component {
	componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (<div className="mainBody">	
		<h1>hi i am leo</h1>
		<ul>
			<li><ActiveLink to="/home/ 123">home</ActiveLink></li>
			<li><ActiveLink to="/about">about</ActiveLink></li>
		<li><ActiveLink to="/curse">curse</ActiveLink></li>
			<li><ActiveLink to="/ncurse">ncurse</ActiveLink></li>
		</ul>
		{this.props.children}
		{this.props.sidebar}
		{this.props.main}
		</div>)
	}
}
ReactDOM.render(<div className={Style.wrap}>
	<Header></Header>
	<Router history={hashHistory}>
	  <Route path='/' component={App}>
	   <Route path='home/:id' component={Home} onLeave={(e)=>{console.log(this)}}></Route>
	   <Route path='about' component={About}></Route>
	   <Route path='/abouts' components={{main:Home,sidebar:About}}></Route>
	   <Redirect from="haha" to="/abouts"></Redirect>
	   <Route path='curse'getComponent={(location,cb)=>{cb(null,Curse)}}></Route> 
	   <Route path='ncurse' getComponent={(location,cb)=>{cb(null,{sidebar:Curse,main:About})}}></Route>
	   <Route path='/tiaozhuan' onEnter={(e)=>{}}></Route>
	  </Route>
	</Router>
</div>, document.getElementById('example'))