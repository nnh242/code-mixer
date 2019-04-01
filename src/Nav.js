import React, {Component} from "react";
import "./nav.css";

class Nav extends Component{
	render(){
		return(
			<nav class="menu" role ="navigation">
  			<a href="/"> Code Mixer</a>
  			<div class="menu-right">
   				<a href=""> Documentation </a>
   				<a href=""> Github </a>
   			</div>
   			</nav>
		)
  	
	}
}

export default Nav;