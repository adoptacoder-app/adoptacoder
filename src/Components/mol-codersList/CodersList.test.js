import React from 'react';
import { render, waitFor } from '@testing-library/react';
import CodersList from './mol-codersList.jsx';
import fetchMock from 'jest-fetch-mock';
import "@testing-library/jest-dom/extend-expect";

//Configurar jest-fetch-mock para que simule el fetch:
fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

//Comprobar que el componente CodersList renderiza correctamente cuando se le proporciona un conjunto de datos. 
// y Comprobar que el fetch se realiza correctamente y devuelve los datos esperados.


describe('CodersList', () => {
    //prueba 1: verificar si coderList renderiza:
    it('renders with data', async () => {
      fetch.mockResponseOnce(JSON.stringify([
        { id: 1, name: 'Carson', bio: 'Developer', avatar: 'https://example.com/avatar1.jpg' },
        { id: 2, name: 'Domingo', bio: 'Designer', avatar: 'https://example.com/avatar2.jpg' },
      ]));
  
      const { getByText } = render(<CodersList />);
  
      await waitFor(5000,() => expect(getByText('Carson')).toBeInTheDocument());
      expect(getByText('Domingo')).toBeInTheDocument();
    });
  
    //prueba 2: comprobar que fetch maneja los errores correctamente:
    it('handles fetch errors', async () => {
      fetch.mockRejectOnce(new Error('fetch failed'));
  
      const { getByText } = render(<CodersList />);
  
      await waitFor(() => expect(getByText('Error: fetch failed')).toBeInTheDocument());
    });

    //prueba 3
    describe("CodersList component", () => {
        beforeEach(() => {
          jest.spyOn(console, "error").mockImplementation(() => {});
          // Usamos la función spyOn para reemplazar la función console.error original 
          // por una versión simulada que no hace nada, para evitar que se muestren 
          // los mensajes de error en la consola de la terminal durante las pruebas.
        });
      
        afterEach(() => {
          console.error.mockRestore(); // Restauramos la función console.error original
        });
      
        it("should log an error message to the console when the fetch fails", async () => {
          const mockErrorResponse = { message: "Network Error" };
          const mockError = new Error();
          mockError.response = mockErrorResponse;
      
          jest.spyOn(global, "fetch").mockRejectedValueOnce(mockError);
          // Usamos la función spyOn para reemplazar la función global fetch por una versión simulada
          // que devuelve un error en la promesa.
      
          render(<CodersList />);
      
          expect(console.error).toHaveBeenCalledWith(mockErrorResponse);
          // Usamos la función toHaveBeenCalledWith de Jest para verificar que se ha llamado
          // a console.error con el mensaje de error adecuado.
        });
      });
  });

  describe("CodersList component", () => {
    it("should fetch and receive a JSON object", async () => {
      jest.spyOn(global, "fetch").mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({
          // Aquí puedes definir el objeto JSON que deseas recibir en la respuesta.
          data: [
            {
              id: 1,
              name: "John Doe",
              avatar: "https://example.com/avatar.jpg",
              bio: "Lorem ipsum dolor sit amet.",
            },
          ],
        }),
      });
  
      const { container } = render(<CodersList />);
  
      await expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(typeof await global.fetch().then((res) => res.json())).toBe("object");
      // Utilizamos la función typeof para verificar que el resultado de la promesa fetch
      // convertida en objeto JSON es un objeto.
  
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  
describe("CodersList component", () => {
    it("should fetch and receive an array", async () => {
      jest.spyOn(global, "fetch").mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce([
          {
            id: 1,
            name: "John Doe",
            avatar: "https://example.com/avatar.jpg",
            bio: "Lorem ipsum dolor sit amet.",
          },
          {
            id: 2,
            name: "Jane Doe",
            avatar: "https://example.com/avatar.jpg",
            bio: "Lorem ipsum dolor sit amet.",
          },
        ]),
      });
  
      const { container } = render(<CodersList />);
  
      await expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(Array.isArray(await global.fetch().then((res) => res.json()))).toBe(
        true
      );
      // Utilizamos la función Array.isArray para verificar que el resultado de la promesa fetch
      // convertida en objeto JSON es un array.
  
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe("CodersList component", () => {
    it("should render without error", () => {
      render(<CodersList />);
    });
  });

  describe("CodersList component", () => {
    it("should have the correct CSS class", () => {
      const { getByRole } = render(<CodersList />);
      const articleElement = getByRole("article");
      expect(articleElement).toHaveClass("coderList-container");
    });
  });