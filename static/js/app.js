// python -m http.server


function buildPlot() {

  d3.json("samples.json").then(function(data) {
   
    function filterTop10(OTUs) {
      return parseInt(data.samples[0].sample_values) > 100;
    }
    
    var filteredSampleValues = data.samples[0].sample_values.filter(filterTop10);
    var filtered_otu_ids = data.samples[0].otu_ids.filter(filterTop10);
    var filtered_otu_labels =data.samples[0].otu_labels.filter(filterTop10);

    var sampleValues = data.samples[0].sample_values;
    var otu_ids = data.samples[0].otu_ids;
    var otu_labels =data.samples[0].otu_labels;

    // var barSampleValues = filteredSampleValues.map(OTUs => data.samples[0].sample_values)
    console.log(otu_ids);
    console.log(filteredSampleValues);
    // console.log(barSampleValues);

    var metaID = data.metadata[0].id;
    var ethnicity = data.metadata[0].ethnicity;
    var gender = data.metadata[0].gender;
    var age = data.metadata[0].age;
    var location = data.metadata[0].location;
    var bbtype = data.metadata[0].bbtype;
    var wfreq = data.metadata[0].wfreq;

    function buildTable(metaID, ethnicity, gender, age, location, bbtype, wfreq) {
      var table = d3.select("#summary-table");
      var tbody = table.select("tbody");
      var trow;
      // for (var i = 0; i < 12; i++) {
      // for (var i = 0;) {
        trow = tbody.append("td");
        trow.append("td").text(metaID);
        trow.append("td").text(ethnicity);
        trow.append("td").text(gender);
        trow.append("td").text(age);
        trow.append("td").text(location);
        trow.append("td").text(bbtype);
        trow.append("td").text(wfreq);
      // }
    }

    // console.log(wfreq);

    var trace1 = {
      type: "bar",
      text: filtered_otu_labels,
      x: filteredSampleValues,
      y: toString(filtered_otu_ids),
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
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU Id" },
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
