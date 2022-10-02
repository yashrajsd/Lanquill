let linkCard1 = document.getElementById('link-info');
linkCard1.innerHTML = 'You will be taken to NEAT website for availing highly discounted price (you will need to register in NEAT)'

let linkCard = document.getElementById('link-info-card');


document.getElementById('link-1').addEventListener('mouseover',function(){
    linkCard.style.display = 'block';
})
document.getElementById('link-1').addEventListener('mouseout',function(){
    linkCard.style.display = 'none';
})

document.getElementById('register-button-section-2').addEventListener('mouseover',function(){
    document.getElementById('art-cricle-1').style.animationPlayState = 'paused'
    document.getElementById('art-cricle-3').style.animationPlayState = 'paused'
    document.getElementById('a').style.display = 'block'
    document.getElementById('b').style.display = 'block'
    document.getElementById('c').style.display = 'block'
})
document.getElementById('register-button-section-2').addEventListener('mouseout',function(){
    document.getElementById('art-cricle-1').style.animationPlayState = 'running'
    document.getElementById('art-cricle-3').style.animationPlayState = 'running'
    document.getElementById('a').style.display = 'none'
    document.getElementById('b').style.display = 'none'
    document.getElementById('c').style.display = 'none'
})