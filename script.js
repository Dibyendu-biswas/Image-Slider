const manuItem = [
    {
        id: 1,
        item: "Food Item 1",
        oneliner: "one:Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta eos? Ad, tempore.",
        img: "/asset/01.jpg",
        hotel: "Hotel No 1",
        desc: "one:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod labore dolores dolorem! Molestiae quas minima voluptatibus eius esse nostrum earum ipsum maxime, cupiditate laborum?"
    },
    {
        id: 2,
        item: "Food Item 2",
        oneliner: "two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta eos? Ad, tempore.",
        img: "/asset/02.jpg",
        hotel: "Hotel No 2",
        desc: "two:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod labore dolores dolorem! Molestiae quas minima voluptatibus eius esse nostrum earum ipsum maxime, cupiditate laborum?"
    },
    {
        id: 3,
        item: "Food Item 3",
        oneliner: "three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta eos? Ad, tempore.",
        img: "/asset/03.jpg",
        hotel: "Hotel No 3",
        desc: "thre:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod labore dolores dolorem! Molestiae quas minima voluptatibus eius esse nostrum earum ipsum maxime, cupiditate laborum?"
    },
    {
        id: 4,
        item: "Food Item 4",
        oneliner: "four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta eos? Ad, tempore.",
        img: "/asset/04.jpg",
        hotel: "Hotel No 4",
        desc: "four:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod labore dolores dolorem! Molestiae quas minima voluptatibus eius esse nostrum earum ipsum maxime, cupiditate laborum?"
    },
    {
        id: 5,
        item: "Food Item 5",
        oneliner: "five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dicta eos? Ad, tempore.",
        img: "/asset/05.jpg",
        hotel: "Hotel No 5",
        desc: "five:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quod labore dolores dolorem! Molestiae quas minima voluptatibus eius esse nostrum earum ipsum maxime, cupiditate laborum?"
    },
]


const item = document.getElementById("item")
const oneliner = document.getElementById("oneliner")
const img = document.getElementById("img")
const hotel = document.getElementById("hotel")
const description = document.getElementById("desc")
const previous = document.getElementById("prev")
const random = document.getElementById("random")
const next = document.getElementById("next")

let currentManu = 0;

window.addEventListener("DomcontentLoad", () => {
    allManu(currentManu)
})
const allManu = () => {
    let manu = manuItem[currentManu]
    console.log(manu);
    item.textContent = manu.item
    oneliner.textContent = manu.oneliner
    img.src = manu.img
    hotel.textContent = manu.hotel
    description.textContent = manu.desc
}

random.addEventListener("click", () => {
    currentManu = Math.floor(Math.random() * manuItem.length)
    allManu(currentManu)
})

next.addEventListener("click", () => {
    currentManu++
    if (currentManu > manuItem.length - 1) {
        currentManu = 0
    }
    allManu(currentManu)
})
previous.addEventListener("click", () => {
    currentManu--
    if (currentManu < 0) {
        currentManu = manuItem.length - 1
    }
    allManu(currentManu)
})