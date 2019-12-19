var dataP = d3.json("distanceDataJson.json")
var mapP = d3.json("countries.geojson")
var gdpDataP = d3.json("csvjson.json")


Promise.all([dataP, mapP, gdpDataP]).then(function(values)
{
  console.log("data", data)

var title = d3.select("body")
              .data(t)
              .enter()
              .append("h1")
              .text(t)
              .attr("id", "title")
}
)
