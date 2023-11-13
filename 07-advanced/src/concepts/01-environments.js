
// environmentsComponent
export const environmentsComponent = ( element ) => {

    console.log( import.meta.env ); // ! variables de entorno en vite
    const html = `
        Dev: ${ import.meta.env.DEV }<br>
        Prod: ${ import.meta.env.PROD }<br>
        Key: ${ import.meta.env.VITE_API_KEY }<br>
        URL: ${ import.meta.env.VITE_BASE_URL }<br>
    `;
    element.innerHTML = html;

};
