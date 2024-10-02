var running = false
let a
let msg
var t


function subsubsub() {
    let k = document.querySelector("#tttt");
    a = k.value
}

function runrunrun() {
    t = setInterval(spamspamspam,21);
    console.log(a)
}

function spamspamspam() {
    const apiParameters = {
        "username": "amer enthusiast",
        "avatar_url":"https://images-ext-1.discordapp.net/external/nbPlvH6RnhIgtalwdvY-2H9l11I0DlWLVhVCoCeP1vE/https/i.ibb.co/Lp5QLM7/bloggif-66f205d65ceca-ezgif-com-effects.gif?width=375&height=500",
        "content" : "<@1010349637502238832> ".concat(document.querySelector("#aaaa").value)
        // "content": "<@1010349637502238832> Ameer is a conundrum, a figure who incites both intrigue and vexation in equal measure. It is not solely his penchant for elaborating upon the most trifling matters; rather, it is the manner in which he graces a gathering with an air of pomp, as though he were the centerpiece of a grand tableau. His laughter resounds with a theatrical exuberance, often drowning out the tender exchanges shared among companions. His chronic indecision exacerbates my frustrations. He doth deliberate interminably over the simplest of choices, be it the establishment in which to dine or the entertainment to be pursued, rendering each assembly a protracted affair. The gravitas with which he weighs each option is akin to that of a sovereign contemplating matters of state, testing the patience of all in attendance. His endless anecdotes, which he considers captivating, frequently meander into tedium, leaving me to ponder how one might remain so blissfully unaware of the weary expressions that grace the faces of his audience. Yet, what truly mystifies me is his utter detachment from the sentiments of those around him. He flits from subject to subject, enraptured by his own narrative, oblivious to the stifling effect his monologues may have on the spirit of the gathering. Each encounter with him doth leave me in a state of bemusement, reflecting upon how one can traverse the realm of social interaction with such a profound lack of awareness, sending forth ripples of discomfort through the fabric of conviviality."
    };
    fetch(a, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiParameters),
    })
}

function stopstopstop() {
    clearInterval(t)
}

