import React from "react";
import { render, screen } from "@testing-library/react"
import App from "../App"
import '@testing-library/jest-dom';

test('renders all dog cards', () => {
    render(<App/>);
    const dogCards = screen.getAllByRole('heading', { level : 2 });
    expect(dogCards).toHaveLength(6);
})

test('renders App component', () => {
    render(<App/>);
    expect(screen.getByText("Chos")).toBeInTheDocument();
    expect(screen.getByText("Chase")).toBeInTheDocument();
    expect(screen.getByText("Champ")).toBeInTheDocument();
    expect(screen.getByText("Chomp")).toBeInTheDocument();
    expect(screen.getByText("Chim")).toBeInTheDocument();
    expect(screen.getByText("Cham")).toBeInTheDocument();
});

test('renders App component', () => {
    render(<App/>);
    expect(screen.getByText("Dalmation")).toBeInTheDocument();
    expect(screen.getByText("Terrier")).toBeInTheDocument();
    expect(screen.getByText("Boxer")).toBeInTheDocument();
    expect(screen.getByText("Chihuahua")).toBeInTheDocument();
    expect(screen.getByText("Great Dane")).toBeInTheDocument();
    expect(screen.getByText("Belgian Mastiff")).toBeInTheDocument();
});

test('renders App component', () => {
    render(<App/>);
    expect(screen.getByText("Age: 2")).toBeInTheDocument();
    expect(screen.getByText("Age: 5")).toBeInTheDocument();
    expect(screen.getByText("Age: 1")).toBeInTheDocument();
    expect(screen.getByText("Age: 8")).toBeInTheDocument();
    expect(screen.getByText("Age: 4")).toBeInTheDocument();
    expect(screen.getByText("Age: 7")).toBeInTheDocument();
});


