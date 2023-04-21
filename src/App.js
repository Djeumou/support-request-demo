import './App.css';
//import bannerBg from './bg1.svg';
import bannerBg from './téléchargement.png';
import img from './component/common/header/logo-mad.png';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './data';
import AnimalCard from './AnimalCard/AnimalCard';
//import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import ReactVideoPlayer from './ReactVideoPlayer';
//import  ReactPlayer from 'react-player';
//import Carousel from 'react-elastic-carousel';
//import { useHistory } from "react-router-dom";
//import styled from 'styled-components';
//import React, {Component} from 'react';
//import { useState  } from 'react';
//import { CCarousel, CCarouselItem} from '@coreui/react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import '@coreui/coreui/scss/coreui.scss';

export default function App () {

  // const [width, setWindowWidth] = useState(0);  const updateDimensions = () => {
  //   const width = window.innerWidth
  //   setWindowWidth(width)
  // }
  

  function showAdditional(additional) {
    const alertInformation = Object.entries(additional)
      .map(information => `${information[0]}: ${information[1]}`)
      .join('\n');
    alert(alertInformation)
  };

// class Redirection extends Component {
//   faireRedirection=()=> {
//     let url = "https://iutdla.atlassian.net/servicedesk/customer/portals?customize=true",
//     let history = useHistory(),
//     history.push(url),
//   }
// }

//   $(".my-all-functions").owlCarousel({
//     items:1,
//     loop:true,
//     dots:false,
//     nav: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     autoplaySpeed: 1000,
//     smartSpeed: 2000,
//  //navText: [$('.am-next'),$('.am-prev')]
//     navText:["<div class='nav-btn prev-slide'><i class=\"fa fa-angle-left\"></i></div>","<div class='nav-btn next-slide'><i class=\"fa fa-angle-right\"></i></div>"]
// });
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.carousel.min.css" />
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.6/assets/owl.theme.default.min.css" />

  // const [fruits, setFruits] = useState([
  //   {id: 1, nom:"banane"},
  //   {id: 2, nom:"papaye"},
  //   {id: 3, nom:"ananas"},
  //   {id: 4, nom:"pastèque"} 
  // ]
  // );
  
  // const setHandleDelete = (id) =>{
  //   console.log(id);
  //   // alert("Bonjour");
  //   // copie le tableau
  //   const upfruits= [...fruits];
  //   //manipuler la copie de notre tableau
  //   const filFruits = upfruits.filter((fruit) => fruit.id !== id);
  //   //modifier mons state avec le setter 
  //   setFruits(filFruits);
  // }

  // const [nouveauFruit, valueEnter] = useState("sam");

  //   const handleChange = (event) =>{
  //     const valueAfterChange=event.target.value
  //     console.log(valueAfterChange);
  //     valueEnter(valueAfterChange);
  //   }

  // const handleSubmit = (event) =>{
  //   event.preventDefault();
  //   const newFruits=[...fruits]

  //   const id = new Date().getTime();
  //   const nom = nouveauFruit;
  //   newFruits.push({id, nom});

  //   setFruits(newFruits);
  //   valueEnter(" ");
  // }
  // const breakPoints =[
  //   {width: 1, itemsToShow: 1},
  //   {width: 550, itemsToShow: 1},
  //   {width: 768, itemsToShow: 2},
  //   {width: 1200, itemsToShow: 3}
  // ];

  //   var link=URL:{ new (url: "https://iutdla.atlassian.net/servicedesk/customer/portals?customize=true") },
  return (
    <div className="wrapper-site">
      {/* <div className="container"> */}
        <div className="wrap-site">

        <div className="wrapper-top-header">
          <div className="container">
            <div className="wrap-top-header">

              <button > <a href=" https://iutdla.atlassian.net/servicedesk/customer/portals?customize=true "> soumettre une requete </a> <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> </button>
              <img src={img} alt="logo" />

            </div>
          </div>
        </div>

          <div className="wrapper-banner">
            {/* <div className="carousel-banner">
              <div className="item-carousel">*/}
                <img src= {bannerBg} alt="bannière-fond" />
                {/* <div className="content-item-banner">
                  <h1> GOOD Morning </h1> */}
                {/* </div>
              </div> */}
              {/* <div className="item-carousel">
                <img src= {belle} alt="bannière-fond" />
              </div> */}
              {/* <div className="item-carousel">
                <img src= {bannerBg} alt="bannière-fond" />
              </div> */}
            {/* </div> */}
            <div className="container">
              <div className="wrap-banner">

              <h1 className="title-banner"> BIENVENUE SUR LA PLATEFORME DE GESTION DES REQUETES DE <br /> l'IUT DE DOUALA </h1>

              </div>
            </div>
          </div>

          <div className="wrapper-content-info-page">
            <div className="container-info-page">
              <div className="wrap-content-info-page">

                <div className="wrapper-accordion">
                  <div className="container-info-page">
                    <div className="wrap-accordion">

                          {/* <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} 
                                    variant="link" eventKey="0">
                                    Quelles types de requête peut-on soumettre à travers la plateforme ?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} 
                                    variant="link" eventKey="1">
                                    Comment soumettre une requête à travers la plateforme ?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                                    vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                                    vitae, accumsan auctor mi.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} 
                                    variant="link" eventKey="2">
                                    Quelles types de fichiers joints fournir pour chaque type de requête ?
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                    Suspendisse massa risus, pretium id interdum in, dictum sit amet
                                    ante. Fusce vulputate purus sed tempus feugiat.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion> */}

                      </div>
                    </div>
                  </div>

                  <div className="wrapper-items-illustrations">
                    <div className="container-info-page">
                      <div className="wrap-items-illustrations">
                        <h1> Decouvrez vos Responsables Académiques </h1>
                        {/* <Carousel controls indicators> */}
                          {/* <div className="content-illustrations"> */}
                            {/* <img src={bannerBg} alt="image-illustration" /> */}
                            <div className="bloc-carousel">
                              <div className="bloc-slider-illustration owl-carousel">
                                {data.map(animal => (
                                    // <Carousel.Item>
                                      <div className="illustration-bloc">
                                        <div className="image-illustration">
                                          <img src= {animal.image} alt="blog" />
                                        </div>
                                        <div className="item-content-bloc">
                                          <AnimalCard
                                          additional={animal.additional}
                                          diet={animal.diet}
                                          key={animal.name}
                                          name={animal.name}
                                          scientificName={animal.scientificName}
                                          showAdditional={showAdditional}
                                          size={animal.size}
                                          />
                                        </div>
                                      </div>
                                    // </Carousel.Item>
                                )
                                )
                                  }
                              </div>
                            </div>
                          {/* </div> */}
                        {/* </Carousel> */}
                    </div>
                  </div>

                  <div className="wrapper-video-items">
                    <div className="container-info-page">
                      <div className="wrap-video-items">

                      <ReactVideoPlayer/>

                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      {/* </div> */}
    </div>
    // <div>
    //   <h1> Mes fruits preférés </h1>
    //   <ul>
    //   {fruits.map((fruit)=>(
    //    <li key={fruit.id}> {fruit.nom} {" "} 
    //    <button onClick={() => setHandleDelete(fruit.id)}> X </button></li>
    //     ))}
    //   </ul>
    //   <form action="submit" onSubmit={handleSubmit}>
    //     <input 
    //     type="text" 
    //     value={nouveauFruit} 
    //     placeholder="Nom du fruit"
    //     onChange={handleChange}
    //     />
    //     <button> Submit </button>
    //   </form>
    // </div>
    );
}
