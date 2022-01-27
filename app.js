const app = Vue.createApp({
    data() {
        return{
            picture: "https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg?w=1600&quality=70"
        }
    },
    methods: {
        async getNewPicture() {
            console.log("Button clicked");
            const res = await fetch("https://api.nasa.gov/EPIC/api/natural/images?api_key=zQMCPpUcGLP3bVmtWYFNNAyGdNYwP4FnXnoZvEpE");
            console.log(res);
            const data = await res.json();
            let imageIndex = Math.floor(Math.random() * data.length);
            console.log(imageIndex);
            console.log(data[imageIndex].date);
            let date = data[imageIndex].date.split(" ")[0].split("-");
            console.log(date);
            let imageURL = `https://epic.gsfc.nasa.gov/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${data[imageIndex].image}.png`;
            console.log(imageURL);
            return imageURL;
        },
    },
});

app.mount("#app");