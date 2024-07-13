import './App.css';

interface CardLayout {
  name: string,
  breed: string,
  url: string, 
  description: string,
  age: number
}

const cards: CardLayout[] = 
[
  {
    name: "Chos",
    breed: "Dalmation",
    url: "http://www.fillster.com/images/pictures/10p.jpg",
    description: "A New dog on the street",
    age: 2
  },
  {  
    name: "Chase",
    breed: "Terrier",
    url: "http://www.fillster.com/images/pictures/120v.jpg",
    description: "A New dog on the street",
    age: 5
  },
  {  
    name: "Champ",
    breed: "Boxer",
    url: "http://www.fillster.com/images/pictures/130x.jpg",
    description: "A New dog on the street",
    age: 1
  },
  {  
    name: "Chomp",
    breed: "Chihuahua",
    url: "http://www.fillster.com/images/pictures/131z.jpg",
    description: "A New dog on the street",
    age: 8
  },
  {  
    name: "Chim",
    breed: "Great Dane",
    url: "http://www.fillster.com/images/pictures/171x.jpg",
    description: "A New dog on the street",
    age: 4
  },
  {  
    name: "Cham",
    breed: "Belgian Mastiff",
    url: "http://www.fillster.com/images/pictures/195p.jpg",
    description: "A New dog on the street",
    age: 7
  }
];

function App() {

  return (
    <div className="card-flex-container">
    {cards.map((card:CardLayout, index:number) => (
      <div className="card-container" key={index}>
        <h2 className="dog-name">{card.name}</h2>
        <h4 className="dog-breed">{card.breed}</h4>
        <img src={card.url} alt="dog-image" className="dog-image" />
        <p className="dog-description">{card.description}</p>
        <p className="dog-age">Age: {card.age}</p>
        </div>
    )
    )}
    </div>
  )
}

export default App;
