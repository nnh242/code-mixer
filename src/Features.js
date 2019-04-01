import React, {Component} from "react";
import "./features.css";

class Features extends Component{
	render(){
		return (
			<div class = "description">
			<ul class="ft-list">
				<li><input type="button" class="ft-button" value="Find the difference in text: [1,2] ≠ [1] => 2 "/></li>
				<li><input type="button" class="ft-button" value="Reverse Text: abc => cba"/></li>
				<li><input type="button" class="ft-button" value="Code converter: Base64, Hex, ASCII, Decimal, Binary, Charcode"/></li>
				<li><input type="button" class="ft-button" value="Function packer and unpacker"/></li>
				<li><input type="button" class="ft-button" value="Code Scrambler (just for fun!)"/></li>
			</ul>
			<br></br>
		</div>
		)
		
	}
}

export default Features;