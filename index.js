
//Animes data
const popularAnime=[
	{
        "_id": "61b30b5a4de72dbb066849e8",
        "slug": "aggretsuko-wallpapers",
        "title": "48 wallpapers in Aggretsuko Wallpapers",
        "count_wallpapers": 48
    },
    {
        "_id": "61b30b5a4de72dbb066849ea",
        "slug": "demon-slayer-kimetsu-no-yaiba-4k-wallpapers",
        "title": "21 wallpapers in Demon Slayer Kimetsu No Yaiba 4K Wallpapers",
        "count_wallpapers": 21
    },
    {
        "_id": "61b30b5a4de72dbb066849eb",
        "slug": "dr-stone-hd-anime-wallpapers",
        "title": "31 wallpapers in Dr. Stone Hd Anime Wallpapers",
        "count_wallpapers": 31
    },
    {
        "_id": "61b30b5a4de72dbb066849ec",
        "slug": "fire-force-desktop-wallpapers",
        "title": "30 wallpapers in Fire Force Desktop Wallpapers",
        "count_wallpapers": 30
    },
    {
        "_id": "61b30b5a4de72dbb066849ed",
        "slug": "fruits-basket-hd-wallpapers",
        "title": "33 wallpapers in Fruits Basket HD Wallpapers",
        "count_wallpapers": 33
    },
    {
        "_id": "61b30b5a4de72dbb066849ee",
        "slug": "haikyuu-wallpapers",
        "title": "57 wallpapers in Haikyuu!! Wallpapers",
        "count_wallpapers": 57
    },
    {
        "_id": "61b30b5a4de72dbb066849ef",
        "slug": "mob-psycho-100-season-2-wallpapers",
        "title": "31 wallpapers in Mob Psycho 100 Season 2 Wallpapers",
        "count_wallpapers": 31
    },
    {
        "_id": "61b30b5a4de72dbb066849f0",
        "slug": "my-hero-academia-season-4-wallpapers",
        "title": "50 wallpapers in My Hero Academia Season 4 Wallpapers",
        "count_wallpapers": 50
    },
    {
        "_id": "61b30b5a4de72dbb066849f1",
        "slug": "sarazanmai-wallpapers",
        "title": "40 wallpapers in Sarazanmai Wallpapers",
        "count_wallpapers": 40
    },
    {
        "_id": "61b30b5a4de72dbb066849f2",
        "slug": "that-time-i-got-reincarnated-as-a-slime-wallpapers",
        "title": "75 wallpapers in That Time I Got Reincarnated As A Slime Wallpapers",
        "count_wallpapers": 75
    },
    {
        "_id": "61b30b5a4de72dbb066849f3",
        "slug": "the-promised-neverland-hd-wallpapers",
        "title": "32 wallpapers in The Promised Neverland HD Wallpapers",
        "count_wallpapers": 32
    }
]

//images of the first anime
let animeImages = [
    "https://wallpapercave.com/wp/wp1837539.jpg",
    "https://wallpapercave.com/wp/wp1993662.jpg",
    "https://wallpapercave.com/wp/wp2123907.png",
    "https://wallpapercave.com/wp/wp1837541.jpg",
    "https://wallpapercave.com/wp/wp2123909.jpg",
    "https://wallpapercave.com/wp/wp1837550.jpg",
    "https://wallpapercave.com/wp/wp2123911.jpg",
    "https://wallpapercave.com/wp/wp2123915.jpg",
    "https://wallpapercave.com/wp/wp2123916.png",
    "https://wallpapercave.com/wp/wp1975698.jpg",
    "https://wallpapercave.com/wp/wp2123920.jpg",
    "https://wallpapercave.com/wp/wp1837595.jpg",
    "https://wallpapercave.com/wp/wp2123926.jpg",
    "https://wallpapercave.com/wp/wp2123927.jpg",
    "https://wallpapercave.com/wp/wp2123929.jpg",
    "https://wallpapercave.com/wp/wp2123933.jpg",
    "https://wallpapercave.com/wp/wp2123935.jpg",
    "https://wallpapercave.com/wp/wp2123943.jpg",
    "https://wallpapercave.com/wp/wp1993771.png",
    "https://wallpapercave.com/wp/wp1993747.jpg",
    "https://wallpapercave.com/wp/wp2123948.jpg",
    "https://wallpapercave.com/wp/wp2123949.jpg",
    "https://wallpapercave.com/wp/wp2123954.png",
    "https://wallpapercave.com/wp/wp2123957.jpg",
    "https://wallpapercave.com/wp/wp2123959.jpg",
    "https://wallpapercave.com/wp/wp1956127.jpg",
    "https://wallpapercave.com/wp/wp1975743.jpg",
    "https://wallpapercave.com/wp/wp2123964.jpg",
    "https://wallpapercave.com/wp/wp2123966.jpg",
    "https://wallpapercave.com/wp/wp2123967.png",
    "https://wallpapercave.com/wp/wp2123969.jpg",
    "https://wallpapercave.com/wp/wp2123970.jpg",
    "https://wallpapercave.com/wp/wp2123971.jpg",
    "https://wallpapercave.com/wp/wp1956193.jpg",
    "https://wallpapercave.com/wp/wp2123973.jpg",
    "https://wallpapercave.com/wp/wp1993659.jpg",
    "https://wallpapercave.com/wp/wp2123975.jpg",
    "https://wallpapercave.com/wp/wp2123976.jpg",
    "https://wallpapercave.com/wp/wp2123977.jpg",
    "https://wallpapercave.com/wp/wp2123986.jpg",
    "https://wallpapercave.com/wp/wp2117199.jpg",
    "https://wallpapercave.com/wp/wp2123988.jpg",
    "https://wallpapercave.com/wp/wp2123993.jpg",
    "https://wallpapercave.com/wp/wp1837552.jpg",
    "https://wallpapercave.com/wp/wp2124008.jpg",
    "https://wallpapercave.com/wp/wp2124009.jpg",
    "https://wallpapercave.com/wp/wp2124010.jpg",
    "https://wallpapercave.com/wp/wp2124011.jpg",
    "https://wallpapercave.com/wp/wp2124012.jpg",
    "https://wallpapercave.com/wp/wp2124013.jpg",
    "https://wallpapercave.com/wp/wp1956063.jpg",
    "https://wallpapercave.com/wp/wp2124015.jpg",
    "https://wallpapercave.com/wp/wp2124026.jpg",
    "https://wallpapercave.com/wp/wp2124031.jpg",
    "https://wallpapercave.com/wp/wp2124034.jpg",
    "https://wallpapercave.com/wp/wp1975647.jpg",
    "https://wallpapercave.com/wp/wp1975740.png"
]

const selectAnime = document.getElementsByClassName("selectAnime")[0]
const wallpapers = document.getElementsByClassName("wallpapers")[0]

popularAnime.map((anime,index)=>(selectAnime.innerHTML = selectAnime.innerHTML+`<option value=${index}>${anime.slug}</option>`))

selectAnime.addEventListener('change',()=>{changedAnimeName()})



function changedAnimeName(){
	let animeName = popularAnime[selectAnime.value].slug
	wallpapers.innerHTML=`<div class="spinner-border" role="status">
						<span class="visually-hidden">Loading...</span>
  						</div>`
	fetch(`https://yume-anime-wallpapers.p.rapidapi.com/popular?slug=${animeName}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "yume-anime-wallpapers.p.rapidapi.com",
		"x-rapidapi-key": "9280ecf01emshe4ac0e48679fdf6p1cebb5jsn9a05295d3a11"
	}
	})
	.then(response => response.json())
	.then((data)=>{
		console.log(data[0].wallpapers)
		changeWallPaper(data[0].wallpapers)})
	}

function changeWallPaper(animeImages){
	wallpapers.innerHTML=""
	animeImages.map((img,id)=>{
		if(id<30){
			wallpapers.innerHTML = wallpapers.innerHTML+
			`<div class="wallPaper">
			<img src=${img} alt="#" />
			<a href=${img} download>
			<button type="button" class="btn btn-outline-secondary" style="margin-top: auto;">Download</button>
			</a>
			</div>`
				}
	})
}
changeWallPaper(animeImages)
