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
import Curse from './component/curse'
import About from './component/about'
import Style from './style/main.css'
import Main from './component/main'
import Sidebar from './component/sidebar'
import Asys from './component/asys'
// import Asy from './component/Asynchronous.js'
const ActiveLink = function(props) {
	return (<Link activeStyle={{color:"red"}} active {...props}></Link>)
}
var Mdzz = function() {
	return (<div>mdzz</div>)
}
class App extends React.Component {
	componentWillMount() {
		console.log(this.props)
	}
	render() {
		return (<div className="mainBody">	
		<h1>hi i am leo</h1>
		<ul>
			<li><ActiveLink to="/home">home</ActiveLink></li>
			<li><ActiveLink to="/about">about</ActiveLink></li>
		    <li><ActiveLink to="/asy">asy</ActiveLink></li>
		    <li><ActiveLink to="/asys">asys</ActiveLink></li>
		</ul>
		{this.props.children}
		{this.props.sidebar}
		{this.props.main}
		</div>)
	}
}
ReactDOM.render(<div className={Style.wrap}>
	<Header />
	<Router history={hashHistory}>
	  <Route path='/' component={App}>
		   <Route path='home' component={Home} >
		      <Route path=':id' component={Curse} />
		   </Route>
		   <Route path='about' components={{main:Main,sidebar:Sidebar}} onEnter={()=>alert("in")} onLeave={()=>alert("out")} />
		   <Route path='/asy' getComponent={(nextState,cb)=>require.ensure([],(require)=>cb(null,Asys))} />
		   <Route path='/asys' getComponents={(nextState,cb)=>require.ensure([],(require)=>cb(null,{ main:require('./component/asy1'),sidebar:require('./component/asy2')}))}></Route>
	  </Route>
	</Router>
</div>, document.getElementById('example'))