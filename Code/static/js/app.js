// python -m http.server
// var sampleValues = data.samples;
// console.log(sampleValues);

function buildPlot() {

  d3.json("samples.json").then(function(data) {
    
    var sampleData = data ;// sampleData=data;
    var sampleValues = data.samples;
    var labels1=data.otu_ids
    var hover1 = data.otu_labels
    // console.log(sampleValues);

    var trace1 = {
      type: "box",
    //   mode: "lines",
      name: "Sample Data",
      text: hover1,
      x: sampleValues,
      y: labels1,
    };
    var data = [trace1];
    Plotly.newPlot("bar", data);//, layout);
    });
};


buildPlot();
