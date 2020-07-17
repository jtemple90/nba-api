let playerData, userInput;

const $name = $('#name')
const $teamName = $('#full_name')
const $position = $('#position')
const $height = $('#height')
const $input = $('input[type="text"]')


$('form').on('submit', getPlayerData);

function getPlayerData(event) {
    event.preventDefault();

    userInput = $input.val();
    $.ajax({
        url: `https://www.balldontlie.io/api/v1/players?search=${userInput}`
    }).then(
        (data) => {
            playerData = data.data[0];
            render();
        },
        (error) => {
            console.Log("error is", error)
        }

    )
}

function render() {
    $name.html(playerData.first_name + ' ' + playerData.last_name);
    $teamName.html(playerData.team.full_name);
    $position.html(playerData.position);
    $height.html(playerData.height_feet + 'ft ' + playerData.height_inches + 'in');
}