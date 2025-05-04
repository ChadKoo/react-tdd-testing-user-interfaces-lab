import {  render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("renders github  and linkedin links", () => {
    render(<App />);
    

   
  
    const githubLink = screen.getByRole("link", {name: /Github Profile/i});
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/ChadKoo");

    const linkedin = screen.getByRole("link", {name: /LinkedIn/i});
    expect(linkedin).toBeInTheDocument();
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/chadwick-koo-281b92363");

  });

  test("displays a top level heading with the text 'Hi, I'm Chad'", () => {
    render(<App/>);

    const topLevelHeading = screen.getByRole("heading",{
      name: /hi, I'm Chad/i,
      exact: false,
      level: 1,
  })
  expect(topLevelHeading).toBeInTheDocument();
})


test("displays a 2nd level heading with the text 'About Me'", () => {
  render(<App/>);

  const secondLevelHeading = screen.getByRole("heading",{
    name: /About me/i,
    exact: false,
    level: 2,
})
expect(secondLevelHeading).toBeInTheDocument();
})

test("displays a paragraph with the text 'bio'", () => {
  render(<App/>);

  const paragraph = screen.getByText("Bio",{exact: false})

expect(paragraph).toBeInTheDocument();
})

test("displays an image with the alttext  of 'profile picture'", () => {
  render(<App/>);

  const image = screen.getByRole("img",{exact: false})

expect(image).toBeInTheDocument();
expect(image).toHaveAttribute("src", "./images/bball.jpeg")
})
