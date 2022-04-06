import React from "react";
import swim from "../Images/swim.png"
import wedding from "../Images/wedding.png"
import bike from "../Images/bike.png"
import basketball from "../Images/basketball.png"
import Navigation from "./Navigation"
import Hero from "./Hero"
import Card from "./Card"

export default function App(){
    return(
        <div>
            <Navigation />
            <Hero />

            <div className="flex-container">
                <Card
                    img = {swim}
                    rating = "5.0"
                    totalrating = "6"
                    country = "USA"
                    description = "Swimming lessons with Katie Zaferes"
                    price = "$136"
                />

                <Card
                    img = {wedding}
                    rating = "5.0"
                    totalrating = "30"
                    country = "KENYA"
                    description = "Learn wedding photography"
                    price = "$125"
                />

                <Card
                    img = {bike}
                    rating = "4.8"
                    totalrating = "5"
                    country = "GERMANY"
                    description = "Group mountain biking"
                    price = "$50"
                />

                <Card
                    img = {basketball}
                    rating = "3.5"
                    totalrating = "7"
                    country = "USA"
                    description = "Learn Basketball"
                    price = "$148"
                />
            </div>
        </div>
    )
}