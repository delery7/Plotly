// python -m http.server

// function unpack(rows, index) {
//  return rows.map(function(row) {
//    return row[index];
//  });
// }

function buildPlot() {

  d3.json("samples.json").then(function(data) {
    
    var sampleValues = data.samples[0].sample_values;
    var otu_ids = data.samples[0].otu_ids;
    var otu_labels =data.samples[0].otu_labels;;

    var trace1 = {
      type: "bar",
      text: otu_labels,
      x: otu_ids,
      y: sampleValues,
    };

    var trace2 = {
        x: otu_ids,
        y: sampleValues,
        text: otu_labels,
        mode: 'markers',
        marker: {
            color: otu_ids,
            // opacity: [1, 0.8, 0.6, 0.4],
            size: sampleValues
          }
      };

    var data = [trace1];
    var dataBubble = [trace2];

    var layout = {
        title: "Sample Data",
        barmode: "group",
        height: 600,
        width: 1200
      };

    var layoutBubble ={
        title: 'Bubble Chart',
        showlegend: false,
        height: 600,
        width: 1200
    }

    Plotly.newPlot("bar", data, layout);
    Plotly.newPlot('bubble', dataBubble, layoutBubble);
    });
};


buildPlot();
