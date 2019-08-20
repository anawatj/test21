import React from 'react'
export default class ScrambleCommon extends React.Component {
    words=[];
    constructor(props) {
        super(props);
    
        this.handleKeyPress = this.handleKeyPress.bind(this);

      }
    render() {
      return (
        <div>
                <input type="text" onKeyDown={this.handleKeyPress} /><br/>
                <textarea id="result" readOnly></textarea>
          
        </div>
      )
    }
    handleKeyPress(event){
            if(event.keyCode==13){
                var word =  this.scramble(event.target.value);
                this.words.push(word);
                var result = document.getElementById("result");
                result.value=this.words.join(",");
            
            }
         
     
    }
    scramble(a)
    {
        a=a.split("");
        for(var b=a.length-1;0<b;b--)
        {
            var c=Math.floor(Math.random()*(b+1));
            var d=a[b];
            a[b]=a[c];
            a[c]=d;
        }
        return a.join("")
    }
  }