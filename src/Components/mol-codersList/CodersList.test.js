import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CodersList from './mol-codersList.jsx';
import fetchMock from 'jest-fetch-mock';
import "@testing-library/jest-dom/extend-expect";

jest.mock('node-fetch');

// Habilitar el mock de fetch
fetchMock.enableMocks();

// Limpiar el mock de fetch antes de cada prueba
beforeEach(() => {
  fetch.resetMocks();
});

describe('CodersList', () => {
  it('renders with data', async () => {
    // Configurar el mock de fetch para que devuelva datos simulados
    fetch.mockResponseOnce(JSON.stringify([
      { id: 1, name: 'Carson', bio: 'Developer', avatar: 'https://example.com/avatar1.jpg' },
      { id: 2, name: 'Domingo', bio: 'Designer', avatar: 'https://example.com/avatar2.jpg' },
    ]));

    const { getByText } = render(<CodersList />);
    await flushPromises(); // Espera a que se resuelvan todas las promesas pendientes

    expect(getByText('Carson')).toBeInTheDocument();
    expect(getByText('Domingo')).toBeInTheDocument();
  });
});
  

  //Comprobar que CodersList se renderiza
  describe("CodersList component", () => {
    it("should render without error", () => {
      render(<CodersList />);
    });
  });


  //Comprobar que trae correctamente la clase coderList-container
  describe("CodersList component", () => {
    it("should have the correct CSS class", () => {
      const { getByRole } = render(<CodersList />);
      const articleElement = getByRole("article");
      expect(articleElement).toHaveClass("coderList-container");
    });
  });