class SeasonTimeline {
    /**
     * Constructor for the Season Timeline
     *
     * @param timelineData Season winner data
     */
    constructor (timelineData){

        // Follow the constructor method in yearChart.js
        // assign class 'content' in style.css to electoral-vote chart
        this.margin = {top: 10, right: 20, bottom: 20, left: 50};
        let timeline = d3.select("#seasonTimeline");//.classed("sub_content", true);
        console.log(timeline);
        console.log(timelineData);

        //fetch the svg bounds
        this.svgWidth = 1620/2;
        this.svgHeight = 150;

        //add the svg to the div
        this.svg = timeline.append("svg")
            .attr("width", this.svgWidth)
            .attr("height", this.svgHeight);

        this.seasonWinners = timelineData;
       
    };

    update() {
        this.svg.append("line")
            .attr("y1",this.svgHeight/2)
            .attr("y2",this.svgHeight/2)
            .attr("x1","0")
            .attr("x2",this.svgWidth)
            .classed("lineChart",true);

        this.svg.selectAll("image")
            .data(this.seasonWinners)
            .enter()
            .append("svg:image")
            .attr("xlink:href", d=>`TeamLogos/${d.Name}.png`)
            .attr("width",50)
            .attr("height",50)
            .attr("x",(d,i)=>i*90+10)
            .attr("y",50);
            //.attr("cy",this.svgHeight/2)
            //.attr("cx",(d,i)=>i*90+10)
            //.attr("r","10");
    };
}