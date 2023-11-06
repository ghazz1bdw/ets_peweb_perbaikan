$(function() {
    let output = "";
    $.getJSON('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0', function(data) {
        console.log(data);
        const results = data.results;
        $(results).each(function(index, value) {
            output += `
                <div class="col-md-3 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${value.name}</h5>
                            <a href="#" class="btn btn-primary">Detail</a>
                        </div>
                    </div>
                </div>
            `
        });
        $('#pokemons').html(output);
    });
});