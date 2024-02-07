// 25-2 Add onclick handler directly or via javascript
// console.log('This is separate file');
// Option 2: add onclick function

    function makeRed(){
        document.body.style.backgroundColor = 'red';
    }


// Option 3: add onclick function 
    const makeBlueButton = document.getElementById('make-blue');
    console.log(makeBlueButton);
    makeBlueButton.onclick = makeBlue;
    function makeBlue(){
        document.body.style.backgroundColor = "blue";
    }

// Option 4: add onclick function
    const purpleButton = document.getElementById('make-purple');
    purpleButton.onclick = function makePurple(){
        document.body.style.backgroundColor = 'purple'
    }

// Option 5: add onclick function 
    const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click',makePink)

    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }

// Option 6: add onclick function 
    const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
        document.body.style.backgroundColor = 'green';
    })