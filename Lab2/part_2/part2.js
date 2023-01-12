var sentence=prompt("Enter the sentence:");
var count=0;

for(let i=0;i<sentence.length;i++)
{
    var ch=sentence[i].toLowerCase();
    if(ch=='a'||ch=='e'||ch=='o'||ch=='u'||ch=='i')
    {
        count++;
    }
}

alert(`Number of vowels in ${sentence} is ${count}`);