import React, { Component } from 'react';
import '../css/Dishes.css';

class MenuContainer extends Component {
    constructor() {
        super();
        this.state = {list:
                [
                    {
                        "name": "Dosa",
                        "cost": 150,
                        "ingredient": "Sambhar,Chutney,Rice"
                    },
                    {
                        "name": "Chilly Potato",
                        "cost": 180,
                        "ingredient": "ChillySauce,Boiled Potatoes"
                    },
                    {
                        "name": "Pizza",
                        "cost": 150,
                        "ingredient": "Cheese,Pizza Bread,Veggies"
                    }

                ]
        }
    }
    addDish=() =>{
        let name=prompt("Enter name");
        let cost=prompt("Enter cost");
        let ingredient=prompt("Enter ingredient");
     let item={
            "name":name,
            "cost":cost,
            "ingredient":ingredient
        };
        let newList=[...this.state.list];
        newList.push(item);
        this.setState(() => {
            return {
              list:newList
            };
          });
        }

    
   
        render() {
            return (
                <div className="menu">
                    <h1>DISHES - LIST</h1>
                    {/* {this.state.list.map((list,index) =><Dishes dish={list}/>)} */}
                    <Dishes dish={this.state.list} dish_add={this.addDish}/>
                </div>
            );


        }
    }
class Dishes extends Component {
    render() {
        return (
           <div>
            
            <ul>
               {this.props.dish.map(list=> (
                 <li onClick={()=>console.log(list.cost,list.ingredient)}>{list.name}</li>
              ))}
           </ul>
              <button className="add_btn" onClick={this.props.dish_add}>Add Dish</button>
           </div>
            
           
         );
    }
}

export default MenuContainer;

