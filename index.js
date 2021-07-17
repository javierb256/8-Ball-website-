const wisdom = [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt',
    'Yes - definitely.',
    'You may rely on it',
    'As I see it, yes.',
    'Most Likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again.',
    'Ask again later.',
    'Better not tell you know',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Dont count on it.',
    'My reply is no.',
    'My sources say no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
]

function myFunction() {
    const question = document.getElementById("question")

    if(question.value.length < 1){
        alert('No Question Entered');
    } else {
        const temp = document.getElementById("eight");
        temp.remove();
        let number = Math.floor(Math.random() * 21);
        document.getElementById("answer").innerText = wisdom[number];
    }
}