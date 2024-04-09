import React,{UseState}from 'react'
import '../App.css'

const Ex02 = () =>{

let pic = "https://cdn.imweb.me/thumbnail/20220422/ca585e9f0d809.jpg "


const [emoji , setEmoji] = useState('♡');
const [txt , setTxt] = useState(좋아요);

const handleLike = () => {
    if(emoji == '좋아요'){
        setEmoji('♥');
        setTxt("좋아요 취소");
    }else{
        setEmoji('♡');
        setTxt('좋아요');
    }

}

return(
<div className='div-center'>
<img width="300px" src={pic}></img>
<p>
<span onClick={handleLike}>♡</span>
{" "}
<span>좋아요</span>

</p>






</div>




)


























}