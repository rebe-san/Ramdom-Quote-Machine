import React from "react";
import "./style.css";
class RandomMachine extends React.Component {
    constructor(props){
      super(props)
      this.state={
        text:"",
        author:""
      }
      this.handleClick=this.handleClick.bind(this)
    }
    componentDidMount(){
      fetch("https://api.quotable.io/random")
      .then(res=>res.json())
      .then(data=>
        this.setState({
        text: data.content,
        author:data.author
      })
      )
    }
    handleClick(){
      fetch("https://api.quotable.io/random")
      .then(res=>res.json())
      .then(data=>
        this.setState({
        text: data.content,
        author:data.author
      })
      )
    }
    
    render(){
      let author=this.state.author;
      let text=this.state.text;
      return(
      <div id="quote-box">
          <p id="text">"{text}"</p>
          <h3 id="author">{author}</h3>
       <button onClick={this.handleClick} id="new-quote">New Quote</button>
          <a href={`https://www.twitter.com/intent/tweet?text="${text}" ${author}`} id="tweet-quote">Tweet Quote</a>   
       </div>   
      )
    }
  }

  export default RandomMachine;