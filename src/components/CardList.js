import React from "react";
import Card from "./Card";

//Pure Component
const CardList = ({robots}) =>{
    // if (true){
    //     throw new Error("Nooo");
    // }

    return (
        <div>
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key={i}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default  CardList;