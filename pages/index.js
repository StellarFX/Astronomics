import { Navbar, Footer } from '../components/Navbar'
import Article from '../components/Article';
import Rocket from '../public/fuseerond.svg';
import Meteor from '../public/meteore.svg';
import Planet from '../public/monde.svg';
import Star from '../public/star.svg';
import Mech from '../public/reglages.svg';
import Other from '../public/menu-points.svg';

export default function HomePage() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export function Home() {

  return (
    <>
      <div className="landing">
        <h1 className="highlight"><span>Find&#160;</span><span>the&#160;</span><span>freshest&#160;</span>
<span>,&#160;</span><span>latest&#160;</span><span>space&#160;</span><span>objects</span></h1>
        <h2>... and ship them right at your door!</h2>
      </div>

      <HotDeals/>
      <Category/>
      <BestSales/>
    </>
  )
  
}

function HotDeals() {

  return (
    <div className="hot-deals">
      <div className="title">
        <h1>Hot deals!</h1>
        <h3>From -10% to -50%</h3>
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
        <Article
          title="Ta maman"
          category="Massive"
          icon={<Star/>}
          color="#FF00FF"/>
      </div>
    </div>
  )
  
}

function BestSales() {

  return (
    <div className="hot-deals">
      <div className="title">
        <h1>Best sales</h1>
        <h3>Based on clients choices...</h3>
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

function Category() {
  return(
    <div className="browse-category">
      <h1 className="highlight"><span>Browse&#160;</span><span>by&#160;</span><span>category</span></h1>
      <div className="button-row">
        <div className="button">
          <Rocket/>
          <h2>Rockets</h2>
        </div>
        <div className="button">
          <Meteor/>
          <h2>Meteors</h2>
        </div>
        <div className="button">
          <Planet/>
          <h2>Planets</h2>
        </div>
        <div className="button">
          <Star/>
          <h2>Collector</h2>
        </div>
        <div className="button">
          <Mech/>
          <h2>Mechs.</h2>
        </div>
        <div className="button">
          <Other/>
          <h2>Misc.</h2>
        </div>
      </div>
    </div>
  )
}
