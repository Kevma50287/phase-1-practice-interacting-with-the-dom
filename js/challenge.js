// grab all the elements we'll be working with
const counterDisplay = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const likes = document.querySelector('.likes')
const form = document.querySelector('#comment-form')
const commentList = document.querySelector('#list')

//count is current counter, likeCounter is # of likes for the count
let count = 0
let likeCounter = 0

//boolean to tell interval when to start and stop
let isPaused = false

//interval function to count
let startup = setInterval(() => {
    //if not pause, we count
    if (!isPaused){
    count ++
    likeCounter = 0
    counterDisplay.textContent = count
}}, 1000)

//plus counter
plus.addEventListener('click', () => {
    count ++
    return counterDisplay.textContent = count
})


//minus counter
minus.addEventListener('click', () => {
    count --
    return counterDisplay.textContent = count
})

//add heart comments
heart.addEventListener('click', () => {
    likeCounter++

    //if likeCounter is over 1, we have already appended a child for the counter
    //so we just need to grab the element and update the text...
    if (likeCounter > 1){
        const existingLI = document.getElementById(`LI${count}`)
        existingLI.textContent = `${count} has been liked ${likeCounter} times`
    } else { //... else we create a new li element and append
        let li = document.createElement('li')
        li.textContent = `${count} has been liked 1 time`
        li.id = `LI${count}`
        likes.appendChild(li)
    }  
})

//pause button
pause.addEventListener('click', () => {
    //take advantage of isPaused global var
    isPaused = !isPaused
    pause.textContent = isPaused ? "resume":"pause"
    minus.disabled = isPaused;
    plus.disabled = isPaused;
    heart.disabled = isPaused;
    submit.disabled = isPaused;
})

//comment submission
form.addEventListener('click', (e) => {
    e.preventDefault();
    AddtoList();
})

//function to add to list
const AddtoList = () => {
    const newComment = document.querySelector('#comment-input').value
    let p = document.createElement('p')
    p.textContent = newComment
    commentList.appendChild(p)
    form.reset()
}
