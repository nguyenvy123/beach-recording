import React, {Component} from 'react';
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail/>,
        title: "free cocktails",
        info:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis inventore velit error consequatur adipisci corrupti ea, minima unde. Rem suscipit porro rerum natus."
      },
      {
        icon: <FaHiking/>,
        title: "free fahiking",
        info:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis inventore velit error consequatur adipisci corrupti ea, minima unde. Rem suscipit porro rerum natus."
      },
      {
        icon: <FaShuttleVan/>,
        title: "free fashuttlevan",
        info:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis inventore velit error consequatur adipisci corrupti ea, minima unde. Rem suscipit porro rerum natus."
      },
      {
        icon: <FaBeer/>,
        title: "free fabeer",
        info:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis inventore velit error consequatur adipisci corrupti ea, minima unde. Rem suscipit porro rerum natus."
      }
    ]
  };

  render(){
    return(
      <section className= "services">
        <Title title="services" />
        <div className="services-center">
          { this.state.services.map((item,index) => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}
