const quotes =[{
    quote:    "To live is the rarest thing in the world. Most people exist, that is all.",
    writer:    'Oscar Wilde'

},
   

{
    quote:"That it will never come again is what makes life so sweet." ,
    writer:"– Emily Dickinson"
},


{ 
    quote:"It is never too late to be what you might have been.",
    writer:"– George Eliot"
},

{ 
    quote:
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ,
    writer:"– Ralph Waldo Emerson"
},
{
    quote:"Pain is inevitable. Suffering is optional",
    writer:"– Haruki Murakami"
},

{ quote:"All the world's a stage, and all the men and women merely players.",

    writer:"– William Shakespeare"
},
{ quote:"Be kind, for everyone you meet is fighting a hard battle." ,

    writer:"– Plato"
},
{ quote:"Unable are the loved to die for love is immortality." ,

    writer:"– Emily Dickinson"
},



{ quote:"Let me live, love, and say it well in good sentences.",

    writer: "– Sylvia Plath"
},
{ quote:
    "Don't let your happiness depend on something you may lose." ,

    writer:"– C.S. Lewis"
},



{ quote:"We are all broken, that's how the light gets in." ,

    writer:"– Ernest Hemingway"
},


{ quote:"Life is tough my darling, but so are you.",
    writer: "– Stephanie Bennett Henry}",
},
]

let qtv= document.querySelector("#qtv");
let quote= document.querySelector("#quote");
let writer= document.querySelector(".writer");

qtv.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML= quotes[random].quote;
    writer.innerHTML = quotes[random].writer;

})
