let finder=document.querySelector('.search_music')
let input=document.querySelector('.in')
let list=document.querySelector('.music_list')
async function getData (value) {

	let response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + value, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "d6c5ee3574msh0748f1500bdfc4bp19a829jsne7d7144d1fdb",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
		}
	})
    let data= await response.json()
	let realData=data.data
	realData.map((element)=>{
		let musicTitle=element.title
		 let song = element.preview
		 let li = document.createElement('li')
		 li.className="music_item"
		let h3 = document.createElement('h3')
		let div = document.createElement('div')
		let audio = document.createElement('audio')
		let source = document.createElement('source')
		h3.textContent = musicTitle
		audio.controls = true

		source.setAttribute('src', song)
		source.setAttribute('type', 'audio/mp3')


		audio.appendChild(source)
		div.appendChild(audio)

		li.appendChild(h3)
		li.appendChild(div)

		list.appendChild(li)

	})
}

	
		
	
	
	finder.onclick=  function(){
	      if(input.value != ""){
			  getData(input.value)
		  }
	}




	



