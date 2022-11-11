let height = $("#black").height()*10/100
let maxWidth = ($("#blue").position().left - $("#black").position().left) 

let blackPosition = $("#black").position()
let bluePosition = $("#blue").position()
let redPosition = $("#red").position()

let black = [3,2,1]
let blue = []
let red = []

let rods = [black,blue,red]

let score = 0

let max = Math.max(...black,...blue,...red)

$( window ).resize(function() {
	load()
});

function load(){
	black.forEach(function(value,index,array){
		//console.log(maxWidth)
		let myWidth = maxWidth*value/max
		$("#box"+value).css("width",myWidth)
		$("#box"+value).css("height",height)
		$("#box"+value).offset({
				top:($("#black").position().top + height*(10 - index - 1)),
				left:$("#black").position().left - myWidth/2 + $("#black").width()/2
			})
		$("#box"+value).css("position","absolute")
		})
	blue.forEach(function(value,index,array){
		//console.log(maxWidth)
		let myWidth = maxWidth*value/max
		$("#box"+value).css("width",myWidth)
		$("#box"+value).css("height",height)
		$("#box"+value).offset({
				top:($("#blue").position().top + height*(10 - index - 1)),
				left:$("#blue").position().left - myWidth/2 + $("#blue").width()/2
			})
		$("#box"+value).css("position","absolute")
		})
	red.forEach(function(value,index,array){
		//console.log(maxWidth)
		let myWidth = maxWidth*value/max
		$("#box"+value).css("width",myWidth)
		$("#box"+value).css("height",height)
		$("#box"+value).offset({
				top:($("#red").position().top + height*(10 - index - 1)),
				left:$("#red").position().left - myWidth/2 + $("#red").width()/2
			})
		$("#box"+value).css("position","absolute")
		})
	$(".score").text("Turns Taken: "+score)
}

$("#move").click(function(){
	let from = parseInt($("#from").val()) - 1
	let to = parseInt($("#to").val()) - 1
	console.log(from,to)
	if (from < 0 || to > 2 || from == to){
		alert("Invalid Input")
		console.log("Invalid")
	}
	else if(rods[from].length == 0){
		alert("can't move")
	}
	else if (rods[to].length == 0 || rods[from][rods[from].length - 1] < rods[to][rods[to].length - 1] ){
		rods[to].push(rods[from].pop())
		score += 1
	}
	else{
		alert("can't move")
	}
	console.log(rods)
	load()
})

load()



