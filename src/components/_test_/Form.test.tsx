

// describe('form', () => {
//     const onSubmit = jest.fn()
//     it('validation', () => {
//         const firstName = screen.getByRole
//     })
// })

import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';
// import { Form } from '../Form/Form';
import user from '@testing-library/user-event';
import { check } from 'prettier';
import Form from '../Form/Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
    // const onSubmit = jest.fn();

    // beforeEach(() => {
    //     // render(<Form />);
    // });

    test("validation message", async () => {
        render(<Form />);
        // const errorName = screen.queryByText(/Name is required/i); //null
        // const errorAge = screen.queryByText(/Age is required/i); //null
        const errorName = await screen.findByRole("alert", { name: 'Name is Required' });
        const errorAge = await screen.findByRole("alert", { name: 'Age is Required' });
        const nameInput = screen.getByRole("textbox", { name: /name/i });
        const ageInput = screen.getByRole("textbox", { name: /age/i });
        const submitBtn = screen.getByRole("button", { name: /submit/i });

        expect(errorName).not.toBeInTheDocument();
        expect(errorAge).not.toBeInTheDocument();
        userEvent.type(nameInput, "Tanni");
        userEvent.type(ageInput, "31");
        userEvent.click(submitBtn);
        // const errorNameAgain = screen.queryByText(/Name is required/i);
        // const errorAgeAgain = screen.queryByText(/Age is required/i);
        // expect(screen.getByTestId("titleError")).toBeInTheDocument();
        // expect(screen.findByText("titleError")).toHaveTextContent("titleError");
        // expect(screen.findByTestId('alert')).rejects.toBe('Error')
        expect(nameInput).toBeInTheDocument();
        expect(ageInput).toBeInTheDocument();
    });


})