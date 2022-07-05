const template = document.createElement('template');

template.innerHTML = `
    <link rel="stylesheet" href="/collapsible-text/component.css" type="text/css">

    <li class="collapsible-item">
        <div class="collapsible-heading">
            <slot name="heading"></slot>
            <span class="collapsible-icon">
                <slot name="icon"></slot>
            </span>
        </div>
        <div class="collapsible-content">
            <slot name="content"></slot>
        </div>
    </li>
`;

class collapsibleText extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    toggleCollapse(){
        const item = this.shadowRoot.querySelector('.collapsible-item');
        const content = this.shadowRoot.querySelector('.collapsible-content');

        item.classList.toggle('active');

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    }

    // Lifecycle hook voor wanneer de component is geladen
    connectedCallback(){
        this.shadowRoot.querySelector('.collapsible-item').addEventListener('click', () => {
            this.toggleCollapse();
        });

        if(this.getAttribute('icon_side') === 'left'){
            this.shadowRoot.querySelector('.collapsible-item').classList.add('icon-left');
        }
    }
}



window.customElements.define('collapsible-text', collapsibleText);