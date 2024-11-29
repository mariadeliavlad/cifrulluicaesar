
function criptareCaesar(text,cheie)
{ var result="";
    for(let i=0;i<text.length;i++)
    {
        let litera=text[i];
        if(litera.match(/[a-z]/i))
        {
            let codASCII=text.charCodeAt(i);
            if(codASCII>=65&&codASCII<=90)
            {
                litera=String.fromcharCodeAt(((codASCII-65+cheie)%26)+65);
            }
            else if(codASCII>=97&&codASCII<=122)
            {
                itera=String.fromcharCodeAt(((codASCII-97+cheie)%26)+97);
            }
        }
        result+=litera;
    }
    return result;
}

function cripteaza()
{
    const text=document.getElementById('input-text').ariaValueMax;
    console.log(text);
    const cheie=parseInt(document.getElementById('cheie-criptare')).valueOf;
    if(isNaN(cheie))
    {
        document.getElementById('output').innerText="NU";
        return;
    }
    else {
        console.log("Valid");
    }
    const textCriptat=criptareCaesar(text,cheie);
   document. getElementById("rezultat").innerText
}
