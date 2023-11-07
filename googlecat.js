const categoryData = [
    {
        imageUrl:
            "https://imgmedia.lbb.in/media/2023/03/64269ee4c70b643ca53755fa_1680252644297.jpg",
        title: "ALL PRODUCTS",
        link: "#products",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A719bc566b4a7494c98c4c7d22bb15423p.png_960x960.png",
        title: "FURNITURE",
        link: "#prod1",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A3ee3c7f39cd94115a2799d82fc4c1919q.jpg_960x960.jpg",
        title: "TISSUE PAPER HOLDER",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A4f1d59f8521d4d53b0b5b294eb10e1dfW.jpg_960x960.jpg",
        title: "HOME DECOR",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A15300ce415234ce7a12a36ee0b8b3106T.jpg_960x960.jpg",
        title: "BATHROOM ACCESSORIES",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A1e4f178ee2294d77a8c17b9f0952b156L.jpg_960x960.jpg",
        title: "CAKE HOLDER",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A00e2bc31eeb842a1bacaeb56eff2fa82c.jpg_960x960.jpg",
        title: "NAPKIN HOLDER",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc01/kf/Ae133e63b93354fff9795325db8567919y.png_480x480.png",
        title: "BUTTONS",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A99fb042d1a5d4630bb652dd152cb5823D.jpg_960x960.jpg",
        title: "KITCHEN ACCESSORIES",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc04/kf/A6e457dcdf76c4f889b1e08b8648d7c19q.jpg_960x960.jpg",
        title: "WOODEN TRAYS",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc01/kf/A67160de5de554e6d8193c008f41d60dcd.jpg_480x480.jpg",
        title: "WALL SHELF RACKS",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc01/kf/A0cca6941ddca45d8ab2915cb6ee0cec0B.jpg_480x480.jpg",
        title: "CERAMIC PLANTERS",
        link: "",
    },
    {
        imageUrl:
            "https://s.alicdn.com/@sc01/kf/Saefd411ed0be404bba5b398f852e11e7z.jpg_480x480.jpg",
        title: "PET ACCESSORIES",
        link: "",
    },
];

const categoryContainer = document.querySelector(".category-cards");

categoryData.forEach((data, index) => {
    const card = document.createElement("div");
    card.classList.add("cat-card");

    // Add the linear-gradient background
    card.style.background = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.821) 100%), url(${data.imageUrl})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.style.backgroundRepeat = "no-repeat";
    card.style.height = "50vh";
    card.style.padding = "20px";
    card.style.display = "flex";
    card.style.alignItems = "flex-end";

    const cardContent = document.createElement("p");
    cardContent.style.display = "flex";
    cardContent.style.flexDirection = "column";
    cardContent.style.color = "white";
    cardContent.style.fontSize = "27px";
    cardContent.style.fontWeight = "300";

    cardContent.innerHTML = `
${data.title} <a href="${data.link}"><button>VIEW PRODUCTS</button></a>
`;

    card.appendChild(cardContent);
    categoryContainer.appendChild(card);
});
