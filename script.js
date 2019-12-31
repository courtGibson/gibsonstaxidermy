//var dataP = d3.json("distanceDataJson.json")
//var mapP = d3.json("countries.geojson")
//var gdpDataP = d3.json("csvjson.json")

var header = ['HOME', 'ABOUT ME', 'MY WORK', 'CONTACT', 'VIDEOS']

Promise.all([header]).then(function(values)
{
  var head = values[0]

  console.log("head", head)

  body = d3.select('body')

  headDiv = body.append("div")
                .attr("id", "headDiv")

 head.forEach(function(d,i)
  {
    return headDiv.append("a")
               .attr("class", "headerText")
               .datum(d)
               .text(d)
               .attr("href", "www.google.com")

  }
)

}
,
  function(err)
{
  console.log(err);
});
