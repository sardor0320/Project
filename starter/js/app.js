const data = [];
const videoCard = document.querySelector(".videos");

const url =
  "https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCg6gPGh8HU2U01vaFCAsvmQ";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "03c1b524c6msh73a211538997739p1b6e76jsn70664630d460",
    "X-RapidAPI-Host": "youtube-v2.p.rapidapi.com",
  },
};

async function fetchData(url) {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.videos);
    videoCard.innerHTML = `
   ${result.videos
     .map(
       (item) => `
    <div id="mr-beast">
    <iframe class="mr-beast" src="https://www.youtube.com/embed/CiL8fCKSYrI" frameborder="0"></iframe>
    <div>
        <span>
          <img id="mr-beast-icon" width="50px" src=${item.thumbnails[0].url}/>
        </span>
        <h1>${item.title}</h1><br>
    </div>
    <p id="mr-beast-p">${item.author}</p>
    <p id="mr-beast-p" style="padding-top: .5rem;">100 тыс. просмотров</p>
</div>
    `
     )
     .join("")}
`;
  } catch (error) {
    console.error(error);
  }
}

fetchData(url);
console.log(data);