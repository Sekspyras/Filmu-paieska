"use strict";

document.getElementById('request').value;

var data;
function getanswer(request){
	document.getElementById('request').value;
$.get("https://www.omdbapi.com/?apikey=e4db3ced&t="+request, function(rawdata){
	document.getElementById('request').value;
var rawstring =JSON.stringify(rawdata);
data =JSON.parse(rawstring);
var title = data.Title;
var year = data.Year;
var director = data.Director; 
var imdb= data.imdbRating;
var plot= data.Plot;
var runtime = data.Runtime;

var posterurl =data.Poster;
document.getElementById('answer').innerHTML="<h1>"+title+"</h1> <br> <img src= '"+posterurl+"'><br><h2> Year Released:"+year+"</h2> <br> <h3>Director:"+director+"</h3><p>"+plot+"</p> <br> <h3> IMDB:"+imdb+"</h3><br><h4>Runtime:"+runtime+"</h4>"; }); }
