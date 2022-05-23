import { Badge } from '@mantine/core';

export default function Article({ icon, title, sale, category, color }) {

  let saleElement = <></>;
  
  if(sale) {
    saleElement = <Badge>Solde</Badge>
  }

  return (
    <div className="article" style={{"--color": color}}>
      <div className="image">
        {icon}
      </div>
      <div className="infos">
        <p>{title}</p>
        <span>{category}</span>
      </div>
      <div className="add-to-cart">
        +
      </div>
      {saleElement}
    </div>
  )
  
}