import React from 'react';
import './Content.css'
import girl from '../images/girl.jpg';


function Content() {

    return (
        <div class="content">
            <div class="header">
                <h1 class="header">Header <br /> Footer</h1>
                <p>Lorem ipsum dolor sit amet. At velit vitae ut consequatur aliquam vem inciduntllam error qui sunt numquam non error neque.
                </p>
            </div>

            <div class="image">
                <img clas="girl-img" alt='loading' src={girl} />
            </div>

        </div>
    );
}

export default Content;
