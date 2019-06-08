import React,{Component} from 'react';
import ReactCSSBuilder from 'react-css-builder';

const styles = ReactCSSBuilder.create({
  container: {
    textAlign: 'center',
    "font-size": 14

  },
  button: {
   // backgroundColor:,
   border: "1px solid black",
    width: '10px',
    padding: '15px',
    borderRadius: '1px',
    outline: 'none',
    color:'black',
  }
});

class Button extends Component {
    constructor(props)
    {
        super(props);
       
    }
    render() {
      
      return (
        <div>
        <button style={styles.css('button')} onclick={this.props.onclick}>{this.props.nom}</button>
      </div>
      )
    }
  }


export default Button;
