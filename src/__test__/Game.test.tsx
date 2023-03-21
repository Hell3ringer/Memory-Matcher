import { getByText, render } from "@testing-library/react"
import "@testing-library/jest-dom"
import React from "react";
import  Game  from "../Components/Game"

test('renders game' ,  () => {
    const container = render(<Game />);
    const gameText = container.getByText('Game');       
    expect(gameText).toBeInTheDocument()

    
})