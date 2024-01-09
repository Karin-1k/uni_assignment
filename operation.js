document.addEventListener('DOMContentLoaded', function (e) {
    let form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // inputs 
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let age = document.getElementById('age').value;

        // the table 
        let table = document.getElementById('table');

        let row = document.createElement('div');
        let c1 = document.createElement('div')
        let c2 = document.createElement('div')
        let c3 = document.createElement('div')

        c1.innerText = name;
        c2.innerText = email;
        c3.innerText = age;

        row.setAttribute('id', 'tr')
        c1.classList.add('td')
        c2.classList.add('td')
        c3.classList.add('td')

        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);

        table.appendChild(row);


        let div = document.createElement('div')
        div.setAttribute('id', 'div')
        let alert = document.createElement('div')
        alert.setAttribute('id', 'alert')
        let h4 = document.createElement('h4')
        h4.setAttribute('id', 'h4')
        let button = document.createElement('button')
        button.setAttribute('id', 'button')
        h4.innerText = 'Inserte Successfully'
        button.innerText = 'X'
        alert.appendChild(button)
        alert.appendChild(h4)

        document.body.appendChild(alert);

        button.addEventListener('click', function () {
            alert.remove();
        })

    });
});



