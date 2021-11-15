class ApartmentCardComponent{
    usd_eur = 0.88;

    constructor(props){
        this.props = props;

        this.init();
    }

    init = () => {
        const {type, owner, roomCount, squares, address, price, imgSrc} = this.props;
        const {fullname, email, phone} = owner;
        const ownerDetails = fullname + ' ' + email + ' ' + phone;
        const {city, country, street, number} = address;
        const {amount, currency} = price;
        const finalPrice = Math.round(100 * (currency === '$' ? amount * ApartmentCardComponent.usd_eur : amount) / 100);
        const formatedPrice = finalPrice + ' €';
        const finalAddress = street + '-' + number + ',' + city + ',' + country + '.';

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card p-2 shadow h-100'
        this.htmlElement.innerHTML = `
        <img class="h-25" src="${imgSrc}" />
        <h2 class="h3">${type}</h2>
        <h4>Kaina:${formatedPrice}</h4>
        <h4>${finalAddress}</h4>
        <h5>Kambarių skaičius: ${roomCount} Plotas: ${squares}</h5>
        <h6>${ownerDetails}</h6>

        <button class="btn btn-danger">Trinti</button>
        `;
        const btn = this.htmlElement.querySelector('.btn');
        

    }
}