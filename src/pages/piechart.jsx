import React from "react";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function Piechart() {
  return (
    <React.Fragment>
      {/* <h1>Pie Chart</h1> */}
      


      <Pie
       width={500}
       height={200}
        data={{
          lables: ["Custom Short Pants", "Basic Tees", "Green"],

          datasets: [
            {
              label: "# of Votes",
              data: [15, 30, 53],
              backgroundColor: [" #EE8483", " #F7DC7E", "#98D89F"],
              borderColor: ["#EE8483", "#F7DC7E", "#F7DC7E"],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
      
    </React.Fragment>
  );
}

export default Piechart;
