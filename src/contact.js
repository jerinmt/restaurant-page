import image from "./assets/contact.svg";

const displayContact = function () {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    
    const heading = document.createElement('h1');
    const pic = document.createElement('img');
    const fb = document.createElement('p');
    const fbLink = document.createElement('a');
    const insta = document.createElement('p');
    const instaLink = document.createElement('a');
    const web = document.createElement('p');
    const webLink = document.createElement('a');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const whatsapp = document.createElement('p');
    

    heading.textContent = "Get to us";
    pic.src = image;
    fb.textContent = "Facebook page:";
    fbLink.textContent = "KoottaanRestaurant/facebook.com";
    fbLink.href = '#';
    insta.textContent = "Follow us on Instagram:";
    instaLink.textContent = "TKR/instagram.com";
    instaLink.href = '#';
    web.textContent = "Our website:";
    webLink.textContent = "www.thekoottaanrestaurant.com";
    webLink.href = '#';
    address.textContent = "Address: The Koottaan Restaurant, Near Government Primary School, Thottakaattukara PO, Kerala";
    phone.textContent = "Call us on: +91-9876543210";
    whatsapp.textContent = "Whatsapp: +91-9876556789";
    
    content.appendChild(container);
    container.appendChild(heading);
    container.appendChild(pic);
    container.appendChild(fb);
    container.appendChild(fbLink);
    container.appendChild(insta);
    container.appendChild(instaLink);
    container.appendChild(web);
    container.appendChild(webLink);
    container.appendChild(address);
    container.appendChild(phone);
    container.appendChild(whatsapp);
}

export {displayContact};