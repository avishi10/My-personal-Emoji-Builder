const myEmojis=['💚','😋','😎','👰 ']

// grabbing the emoji container to render the emoji


function renderMyEmoji(){
    const emojiBox= document.getElementById('emojiContainer')
    emojiBox.innerHTML=''
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiBox.append(emoji)
    }
}

renderMyEmoji()
//grabbing the  input filed to take the value
const emojiInput =document.getElementById('emoji-input')

// Add to last 
const pushBtn= document.getElementById('push-btn')
pushBtn.addEventListener('click', function(){
    if(emojiInput.value){
        myEmojis.push(emojiInput.value)
        emojiInput.value=""
        
        renderMyEmoji()
        console.log(myEmojis)
    }
})
// add to start
const unshiftbtn=document.getElementById('unshift-btn')
unshiftbtn.addEventListener('click',function(){
    if(emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        emojiInput.value=""
        renderMyEmoji()
        console.log(myEmojis)
    }
})
// Remove from start
const shiftBtn =document.getElementById('shift-btn')
shiftBtn.addEventListener('click',function(){
    myEmojis.shift()
    renderMyEmoji()
})
// Remove from Last
const popBtn =document.getElementById('pop-btn')
popBtn.addEventListener('click',function(){
    myEmojis.pop()
    renderMyEmoji()
})
