import React, { useState } from 'react';

export default function TextForm(props) {
const handleUpClick =() =>{
   let tet= text.split(" ").filter((element)=>{return element.length !== 0}).length
   if(tet !==0){

       let newText =text.toUpperCase();
       setText(newText)
       props.showAlert("uppercase done ","success")
    }
    else{
       let newText =text.toUpperCase();
       setText(newText)
   }
}
const handleLoClick =() =>{
    let tet= text.split(" ").filter((element)=>{return element.length !== 0}).length
   if(tet !==0){
       let newText =text.toLowerCase();
       setText(newText)
       props.showAlert("lowercase done ","success")
    }
    else{
       let newText =text.toLowerCase();
       setText(newText)
   }
}
const handleClear =() =>{
    let newText ="";
    setText(newText)
    props.showAlert("clear text done ","success")
}
const handleCopy =() =>{
    // var text = document.getElementById("myBox")
    // text.select();
    navigator.clipboard.writeText(text)
    // document.getSelection().removeAllRanges()
    props.showAlert("copy text done ","success")
}

const handleExtraSpaces =() =>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("remove extra spaces done ","success")
}

const handleOnChange =(event) =>{
    setText(event.target.value)
}

    const [text, setText] = useState('Enter text here');        //state hook
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white':'black'}}>
            <div className="mb-3">
                <h1>{props.heading} </h1>
                <textarea className="form-control" value={text} id="myBox" rows="8" style={{backgroundColor : props.mode === 'dark' ? 'gray':'white',
            color: props.mode === 'dark' ? 'white':'black' }} onChange={handleOnChange}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear} >clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces} >Remove extra spaces</button>
        </div>
        <div className="container" style={{color : props.mode === 'dark' ? 'white':'black'}}>
            <h1>text your summary</h1>
            {/* original */}
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and the lenght with spaces {text.length}</p> 

            <p>{text.split(" ").length -1} words and the lenght with spaces {text.length}</p>
            <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters with out spaces</p>


            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes for reading</p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )    
}



