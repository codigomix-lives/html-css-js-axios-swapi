buscar();

function buscar() {

    const elementId = document.querySelector('#id');
    let id = elementId.value;

    if (!id || isNaN(id) || id <= 0) {
        id = 1;
        elementId.value = id;
    }

    axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(function (response) {
            const people = response;

            // document.getElementById("content").innerText = JSON.stringify(people);
            document.querySelector("#name").innerHTML = people.data.name;
            document.querySelector("#height").innerHTML = people.data.height + 'cm';
            document.querySelector("#hair").innerHTML = people.data.hair_color;

            document.querySelector("#people").style.display = '';

        });

}
