const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //trigger bottom - offset to add box to center.
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //the function returns a DOMRect - which describes the sizw and position of a rectangle 
        //and the position relative to the viewport
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            // remove when scrolling up
            box.classList.remove('show')
        }
    })
}