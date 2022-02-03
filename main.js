function user_input()
{
    const buttons = document.querySelectorAll('.but');
    buttons.forEach((button) => {
                                    button.addEventListener('click', () => 
                                    {   
                                        if(i<5)
                                        {
                                            compare(button.id, computerPlay());
                                            i++;
                                        }
                                        if(i==5)
                                        {
                                            let elems = document.getElementsByClassName("but");
                                            for(let i = 0; i < elems.length; i++) {
                                                elems[i].disabled = true;
                                            }
                                            end();
                                        }
                                    })
                                });
}


function computerPlay(){
    let choices = ['rock', 'paper', 'scissor'];
    let computer_choice = choices[Math.floor(Math.random()*choices.length)];
    return computer_choice;
}


function compare(user, computer){
    const user_score = document.querySelector('#user');
    const computer_score = document.querySelector('#computer');
    if (user == computer)
    {
        result.textContent = `It's a Tie, You both choose ${user}`;
    }
    else if (user == 'rock' && computer=='paper' || user == 'scissor' && computer=='rock' || user == 'paper' && computer=='scissor')
    {
        result.textContent = `You Loss! ${computer} beats ${user}`;
        computer_track++;
        computer_score.textContent = `${computer_track}`;
    }
    else
    {
        result.textContent = `You wins! ${user} beats ${computer}`;
        user_track++;
        user_score.textContent = `${user_track}`;
    }
}

function end()
{
    if (user_track > computer_track)
    {
        result.textContent = `Horray! you win by ${user_track} : ${computer_track} 🤩`;
    }
    else if (computer_track>user_track)
    {
        result.textContent = `You loss by ${computer_track} : ${user_track} 😢`;
    }
    else
    {
        result.textContent = `Its a tie, You both wins ${user_track} game 😶`;
    }
}



let i =0;
let user_track = 0;
let computer_track = 0;
const result = document.querySelector('.result');
user_input();

const reset = document.querySelector('#reset_id');
reset.addEventListener('click', () => {location.reload()});