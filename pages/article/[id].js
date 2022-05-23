import { Select, RangeSlider } from '@mantine/core';
import { useRouter } from "next/router";

import {Navbar, Footer} from '../../components/Navbar'
import Article from '../../components/Article';

import Star from '../../public/star.svg';
import Moonrock from '../../public/moonrock.png';
import Panier from '../../public/panier.svg';

export default function ArticlePage() {

  const router = useRouter();
  const id = router.query.id;
  
  return (
    <>
      <Navbar/>
      <div className="article-presentation">
        <ArticleImage/>
        <ArticleLore/>
      </div>
      <Properties/>
      <Interest/>
      <Footer/>
      
      
    </>
  )
  
}

function ArticleImage() {
  return (
    <div className="image-col">
      <div className="miniatures">
        <div className="image"> 
          <img src="/moonrock.png"/>
        </div>
        <div className="image"> 
          <img src="/moonrock.png"/>
        </div>
        <div className="image"> 
          <img src="/moonrock.png"/>
        </div>
      </div>
      <div className="aimage" style={{"--color": "#ff00ff"}}>
        <div className="image"> 
          <img src="/moonrock.png"/>
        </div>
      </div>
    </div>
  )
}

function ArticleLore() {
  return(
    <div className="lore-col">
      
      <div className="alore">
        <h1>Moon rock</h1>
        <h4>Miscelleanous</h4>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
        
        <div className="price-row">
          <h1>2,3 ⟠</h1>
          
          <div className="button">
            <Panier/>
            <span>Add to cart</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

function Properties() {

  return (
    <div className="properties">
      <div className="title">
        <h1>About...</h1>
        <h3>Article informations.</h3>
      </div>
      <div className="details">
        <h1>Product details</h1>
        <div className="detailsobject">
          <h2>Reference number</h2>
          <p>OL458FD541</p>
        <h1>Dimensions</h1>
        </div>
        <div className="detailsobject">
          <h2>Width</h2>
          <p>6m</p>
          <h2>Height</h2>
          <p>12m</p>
        </div>
      </div>
    </div>
  )
  
}


function Interest() {

  return (
    <div className="interest">
      <div className="title">
        <h1>You could be interested...</h1>
      </div>

      <div className="content">
        <Article
          title="Ta maman"
          category="Massive"
          icon={<Star/>}
          color="#FF00FF"/>
        <Article
          title="Ta maman"
          category="Massive"
          icon={<Star/>}
          color="#FF00FF"/>
        <Article
          title="Ta maman"
          category="Massive"
          icon={<Star/>}
          color="#FF00FF"/>
      </div>
    </div>
  )
  
}
