const arrayofquotes = [
    {'author':'vishal gautam',
    'quote': 'beware of what you become in persuit of what you want.'
    },
    {'author': 'Epictetus', 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
     'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Vishal gautam', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
     'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

// let a=0;
 function myfunction(){
    const random = Number.parseInt(Math.random()*arrayofquotes.length + 1);
    document.querySelector('#demo').textContent = `\"${arrayofquotes[random].quote}\"`;
    document.querySelector('#demo1').textContent = `--${arrayofquotes[random].author}`;

    // a++
 }