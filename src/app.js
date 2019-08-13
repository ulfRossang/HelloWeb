console.log("Hello WebStandards");
class HelloComponent extends HTMLElement { 

    async connectedCallback() { 
        const response = await fetch("http://localhost:8080/Hello/resources/hello");
        console.log(response);
        const { greeting } = await response.json();
        this.innerHTML = `
            <h2>${greeting}</h2>
        `;
    }

}
customElements.define("hello-component",HelloComponent); 