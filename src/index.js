import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Myapp(){
  return(
    
      <div><h1>Related Posts</h1>
      
      <div className='container'>
      <Card 
        img="Images/camera.jpg"
        title="Professional Photography"
        heading="What do you Know about"
        description="A camera is an optical instrument that captures a visual image.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        link="https://www.pixpa.com/blog/how-to-become-a-professional-photographer"
      />

      <Card 
        img="Images/compass.jpg"
        title="Compass Category"
        heading="What do you Know about"
        description=" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable EnglishA camera is an optical instrument that captures a visual image."
        link="https://www.lidolearning.com/questions/ph-bb-selina7-ch7-exsa-q8/q8-what-is-a-magnetic-compass-/"

      />


      <Card 
        img="Images/tree.jpg"
        title="The Nature Evergreen"
        heading="What do you Know about"
        description="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy A camera is an optical instrument that captures a visual image."
        link="https://www.nature.com/nature-portfolio/about"

      />
      </div>
      <div className="footer">
      <p>I Hope You Enjoy This Blog.</p>
      <p>If you want to show some love, press L. ❤️</p>
     <p>Please write a comment with your opinion too. 📝</p>
     <p>Have a nice day! ☀️</p>
  </div>
     </div>
  )
}

function Card(props){
  return(
    <div className='card'>
      <div className='card-body'>
        <img src={props.img} class="card-img"/>
        
      <div className='card-content'>
        <h3 className='card-title'>{props.title}</h3>
        <h3 className='card-heading'>{props.heading}</h3>
        <p className='card-description'>{props.description}</p>
      </div>

      </div>
      
      <a className="show" href={props.link}>Read Full Story here...</a>
      <br/>
      <br/>
      </div>
      
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Myapp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
