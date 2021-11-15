class ApartmentGridComponent {
    constructor(){
        this.state = {
            loading: false,
            apartments: []
        }
        this.init();
    }
    
    fetchApartments = () => API.fetchApartments(this.saveApartments, alert);

    saveApartments = (apartments) => {
        this.state.apartments = apartments;
        this.state.loading = false;

        this.render();
    }


    init = () => {
        this.state.loading = true;
        this.fetchApartments();
        this.htmlElement = document.createElement('div');
        this.htmlElement.className = 'row';

        this.render()
    }

    wrap = (element) =>{
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
        column.appendChild(element);
        return column;
    }

    render = () =>{
        const {loading, apartments} = this.state;
        if(loading){
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/building_loader.gif"/></div>`;
    }else if(apartments.length > 0){
        this.htmlElement.innerHTML = '';
        const apartmentElements = apartments
        .map(a => new ApartmentCardComponent(a))
        .map(a => a.htmlElement)
        .map(this.wrap);
        this.htmlElement.append(...apartmentElements)
        }else{
            this.htmlElement.innerHTML = `<h1>Apartamanetų nėra</h1>`
        }  
    }
}
