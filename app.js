const inventoryItem = document.querySelectorAll(".inventory-bg");
const equipped = document.querySelector(".equipped")


inventoryItem.forEach(function (selectedItem) {
    // Input selector
    const invItem = selectedItem.querySelector(".inventory-item");
    invItem.addEventListener('click', swapItem);
    document.addEventListener('keypress', keyTrigger);
    document.addEventListener('wheel', scrollFunc);
    document.addEventListener('scroll', scrollCheck);

    function scrollCheck(event) {
        console.log(event);
    }
    // Scrolling
    let scrollNum = 1;
    function scrollFunc(event) {
        // Increase and decrease by deltaY wheel
        if (event.deltaY < 0) {
            scrollNum += event.deltaMode -1;
        } else if (event.deltaY > 0) {
            scrollNum -= event.deltaMode -1;
        }

        // Min val 1, max val 9
        scrollNum = Math.min(Math.max(1, scrollNum), 9)

        // data-id to number
        inventoryItem.forEach((item) => {
            const dataId = parseInt(item.getAttribute('data-id'));
            if (scrollNum === dataId) {
                item.classList.add("selected");
                equipped.style.backgroundImage = ` url(src/${dataId}.webp)`
            } else if (item !== selectedItem) { 
                item.classList.remove("selected");
            }

    });
        console.log('scrolled to number:', scrollNum);
    }

    // Keytriggers
    onkeydown = keyTrigger;
    function keyTrigger(e) {
        inventoryItem.forEach((item) => {
            const dataId = parseInt(item.getAttribute('data-id'));
            keyPress = parseInt(e.key);
            if (keyPress === dataId) {
                item.classList.add("selected");
                equipped.style.backgroundImage = ` url(src/${dataId}.webp)`
                console.log('buttonpress:', keyPress);
            } else if (keyPress !== keyPress) {
                console.log('null');
            } else if (item !== selectedItem) { 
                item.classList.remove("selected");
            }
        })
        
    };

    // Mouse click
    function swapItem() {
        inventoryItem.forEach((item) => {
            const dataId = parseInt(item.getAttribute('data-id'));
            if (item !== selectedItem) {
                item.classList.remove("selected"); 
            } else {
                selectedItem.classList.add("selected");
                equipped.style.backgroundImage = ` url(src/${dataId}.webp)`
            }
        });
        
        
        console.log("pressed:", this);
    };
});
