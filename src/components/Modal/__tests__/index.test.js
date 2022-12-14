import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal component', () => {
    it ('renders', () => {
        // baseline render test
        render(<Modal 
            currentPhoto={currentPhoto} 
            onClose={mockToggleModal} 
            />);
    });

    it ('matches snapshot', () => {
        const { asFragment } =
        render(<Modal 
            currentPhoto={currentPhoto} 
            onClose={mockToggleModal} 
            />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('Click event', () => {
        it('calls onClose handler', () => {
            // Arrange: Render Modal
            const { getByText } = render(<Modal
                onClose={mockToggleModal}
                currentPhoto={currentPhoto}
            />);

            // Act: Simulate click event
            fireEvent.click(getByText('Close this modal'));

            // Assert: Expected matcher
            expect(mockToggleModal).toHaveBeenCalledTimes(1);
        });
    })
})