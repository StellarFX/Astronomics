import { Select, RangeSlider } from '@mantine/core';
import { Navbar } from '../components/Navbar';

import Article from '../components/Article';
import Rocket from '../public/fuseerond.svg';
import Meteor from '../public/meteore.svg';
import Planet from '../public/monde.svg';
import Star from '../public/star.svg';
import Mech from '../public/reglages.svg';
import Other from '../public/menu-points.svg';


export default function Search() {

  return (
    <>
      <Navbar hasBackground="#8A77FF"/>
      <Filters/>
      <Results/>
    </>
  )
  
}

/*const priceMarks = [
  {value: 0, label: "0\u00A0⟠"},
  {value: 50, label: "50\u00A0⟠"},
  {value: 100, label: "100\u00A0⟠"},
]*/

const data = [
              {
                value: 'rockets',
                label: 'Rockets',
                image: <Rocket/>,
              },
              {
                value: 'meteors',
                label: 'Meteors',
                image: <Meteor/>,
              },
              {
                value: 'planets',
                label: 'Planets',
                image: <Planet/>,
              },
              {
                value: 'collector',
                label: 'Collector',
                image: <Star/>,
              },
              {
                value: 'mechs',
                label: 'Mechs.',
                image: <Mech/>,
              },
              {
                value: 'misc',
                label: 'Misc.',
                image: <Other/>,
              },
            ]

function ListItem({ value, label, image}) {
  
  return (
    <div className="list-item">
      {image}
      <p>{label}</p>
    </div>
  )
      
}

function Filters() {
  return(
    <div className="filters">
      <h1 className="highlight"><span>Filters</span></h1>
      <div className="filter-row">

        <div className="price">
          <p>Price</p>
          <RangeSlider/>
        </div>
        
        <div className="size">
          <p>Size</p>
          <RangeSlider/>
        </div>
        
        <div className="category">
          <p>Category</p>
          <Select
            itemComponent={ListItem}
            data={data}
          />
        </div>

      </div>
    </div>
  )
}

function Results() {

  return (
    <div className="results">
      <div className="title">
        <h1>8 results</h1>
        <div className="sort">
          <Select
            placeholder="Sort results..."
            data={[
              { value: 'prixemax', label: 'Price +' },
              { value: 'pricemin', label: 'Price -' },
              { value: 'latest', label: 'Latest' }
            ]}
    />
        </div>
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
