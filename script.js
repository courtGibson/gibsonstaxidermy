//var dataP = d3.json("distanceDataJson.json")
//var mapP = d3.json("countries.geojson")
//var gdpDataP = d3.json("csvjson.json")

var t = "hello world"

Promise.all([t]).then(function(values)
{
  var ti = values[0]

  console.log("ti", ti)

var title = d3.select("body")
              .append("h1")
              .text(t)
              .attr("id", "title")

}
,
  function(err)
{
  console.log(err);
});
