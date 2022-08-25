import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe('contact-component', () => {

    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('inserts text into link', () => {
        const { getByTestId } = 
            render(<Contact />);
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
    });

    it('inserts text into button', () => {
        const {getByTestId} = 
            render(<Contact />);
        expect(getByTestId('submit')).toHaveTextContent('Submit');
    })
})

