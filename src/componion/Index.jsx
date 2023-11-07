import React, { useState } from 'react';
import '../index.css';

export default function Index() {
    const [text, setText] = useState('');

    //Viết hoa
    let toUpperCase = () => {
        const upperCaseText = text.toUpperCase();
        setText(upperCaseText);
    };

    //viết thường
    let lowerCase = () => {
        const lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
    };

    return (
        <>
        <div className='containerParent'>
            <div className='container'>
                <div className='header'>
                    <i className="fa-solid fa-envelope"></i>
                    Word Counter
                </div>

                <div className='box_container'>
                    <div className='box1'>
                        Word
                        <br />
                        {text.split(' ').filter(word => word !== '').length}
                    </div>
                    <div className='box1'>
                        Letter
                        <br />
                        {text.length}
                    </div>
                    <div className='box1'>
                        Paragraph
                        <br />
                        {/* /n là xuống dòng*/}
                        {text.split('\n').filter(paragraph => paragraph !== '').length}
                    </div>
                </div>

                <div className='textbox'>
                    <textarea
                        id=""
                        name=""
                        rows="12"
                        cols="86"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    >
                        Enter / Text Your Text
                    </textarea>
                </div>

                <div className='footer'>
                    <div className='box2'>
                        <button onClick={() => toUpperCase()}>Click to UpperCase</button>
                    </div>
                    <div className='box2'>
                        <button onClick={() => lowerCase()}>Click to LowerCase</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}