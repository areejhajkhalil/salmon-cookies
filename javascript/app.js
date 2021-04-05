'use strict';

const workinghours = ['6am', ' 7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let Seattle = {
    shopplaes: 'Seattle',
    Min: 23,
    Max: 65,
    Cookies: 6.3,
    total: 0,
    customerseveryhour: [],
    CookiesforeveyCustomer: [],

    Calculatecustomerseveryhour: function () {
        for (let i = 0; i < workinghours.length; i++) {
            this.customerseveryhour.push(random(this.Min, this.Max))


        }
    },
    calculateCookiesforeveyCustomer: function () {
        for (let i = 0; i < this.customerseveryhour.length; i++) {

            this.CookiesforeveyCustomer.push(Math.floor(this.customerseveryhour[i] * this.Cookies));
            this.total += this.CookiesforeveyCustomer
        }


    },
    render: function () {
        
        let parent = document.getElementById('parent')
        
        let shoplocation = document.createElement('h3')
        
        parent.appendChild(shoplocation);
       
        shoplocation.textContent = this.shopplace;
        
        let ullistelement = document.createElement('ul');
        
        parent.appendChild(ullistelement);
        
        for (let i = 0; i < workinghours.length; i++) {
            let li = document.createElement('li');
            ullistelement.appendChild(li);
            li.textContent = `${workinghours[i]}: ${this.CookiesforeveyCustomer[i]} cookies`
        }
        let total2 = document.createElement('li');
        ullistelement.appendChild(total2);
        total2.textContent = `Total: ${this.total.floor}cookies `
    }
    


}; 
Seattle.Calculatecustomerseveryhour();
Seattle.calculateCookiesforeveyCustomer();
Seattle.render();




/*********************************************************************** */

let lima = {
    shopplaes: 'lima',
    Min: 2,
    Max: 16,
    Cookies: 4.6,
    total: 0,
    customerseveryhour: [],
    CookiesforeveyCustomer: [],

    Calculatecustomerseveryhour: function () {
        for (let i = 0; i < workinghours.length; i++) {
            this.customerseveryhour.push(random(this.Min, this.Max))


        }
    },
    calculateCookiesforeveyCustomer: function () {
        for (let i = 0; i < this.customerseveryhour.length; i++) {

            this.CookiesforeveyCustomer.push(Math.floor(this.customerseveryhour[i] * this.Cookies));
            this.total += this.CookiesforeveyCustomer
        }


    },
    render: function () {
        
        let parent = document.getElementById('parent')
        
        let shoplocation = document.createElement('h3')
        
        parent.appendChild(shoplocation);
       
        shoplocation.textContent = this.shopplace;
        
        let ullistelement = document.createElement('ul');
        
        parent.appendChild(ullistelement);
        
        for (let i = 0; i < workinghours.length; i++) {
            let li = document.createElement('li');
            ullistelement.appendChild(li);
            li.textContent = `${workinghours[i]}: ${this.CookiesforeveyCustomer[i]} cookies`
        }
        let total2 = document.createElement('li');
        ullistelement.appendChild(total2);
        total2.textContent = `Total: ${this.total}cookies `
    }
    


}; 
lima.Calculatecustomerseveryhour();
lima.calculateCookiesforeveyCustomer();
lima.render();


/**************************************************************************/

let paris = {
    shopplaes: 'paris',
    Min: 20,
    Max: 38,
    Cookies: 2.3,
    total: 0,
    customerseveryhour: [],
    CookiesforeveyCustomer: [],

    Calculatecustomerseveryhour: function () {
        for (let i = 0; i < workinghours.length; i++) {
            this.customerseveryhour.push(random(this.Min, this.Max))


        }
    },
    calculateCookiesforeveyCustomer: function () {
        for (let i = 0; i < this.customerseveryhour.length; i++) {

            this.CookiesforeveyCustomer.push(Math.floor(this.customerseveryhour[i] * this.Cookies));
            this.total += this.CookiesforeveyCustomer
        }


    },
    render: function () {
        
        let parent = document.getElementById('parent')
        
        let shoplocation = document.createElement('h3')
        
        parent.appendChild(shoplocation);
       
        shoplocation.textContent = this.shopplace;
        
        let ullistelement = document.createElement('ul');
        
        parent.appendChild(ullistelement);
        
        for (let i = 0; i < workinghours.length; i++) {
            let li = document.createElement('li');
            ullistelement.appendChild(li);
            li.textContent = `${workinghours[i]}: ${this.CookiesforeveyCustomer[i]} cookies`
        }
        let total2 = document.createElement('li');
        ullistelement.appendChild(total2);
        total2.textContent = `Total: ${this.total}cookies `
    }
    


}; 
paris.Calculatecustomerseveryhour();
paris.calculateCookiesforeveyCustomer();
paris.render();

/********************************************************************/

let Dubai = {
    shopplaes: 'Dubai',
    Min: 11,
    Max: 38,
    Cookies: 2.3,
    total: 0,
    customerseveryhour: [],
    CookiesforeveyCustomer: [],

    Calculatecustomerseveryhour: function () {
        for (let i = 0; i < workinghours.length; i++) {
            this.customerseveryhour.push(random(this.Min, this.Max))


        }
    },
    calculateCookiesforeveyCustomer: function () {
        for (let i = 0; i < this.customerseveryhour.length; i++) {

            this.CookiesforeveyCustomer.push(Math.floor(this.customerseveryhour[i] * this.Cookies));
            this.total += this.CookiesforeveyCustomer
        }


    },
    render: function () {
        
        let parent = document.getElementById('parent')
        
        let shoplocation = document.createElement('h3')
        
        parent.appendChild(shoplocation);
       
        shoplocation.textContent = this.shopplace;
        
        let ullistelement = document.createElement('ul');
        
        parent.appendChild(ullistelement);
        
        for (let i = 0; i < workinghours.length; i++) {
            let li = document.createElement('li');
            ullistelement.appendChild(li);
            li.textContent = `${workinghours[i]}: ${this.CookiesforeveyCustomer[i]} cookies`
        }
        let total2 = document.createElement('li');
        ullistelement.appendChild(total2);
        total2.textContent = `Total: ${this.total}cookies `
    }
    


}; 
Dubai.Calculatecustomerseveryhour();
Dubai.calculateCookiesforeveyCustomer();
Dubai.render();

