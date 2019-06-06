import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  clients = [
    {
      "Key": "1150",
      "Name": "Test Oceanic Closed Client",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "101011",
      "Name": "Client Numbers Li",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "25914",
      "Name": "Viberts Test",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "2682",
      "Name": "Test Oceanic Client",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "999906",
      "Name": "Viberts Test Two",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "A&23",
      "Name": "A 23",
      "Partner": "BM",
      "Manager": "MC",
      "Administrator": "PP"
    },
    {
      "Key": "A.001",
      "Name": "Andover Investments Limited",
      "Partner": "DW",
      "Manager": "SD",
      "Administrator": "THB"
    },
    {
      "Key": "ABN",
      "Name": "ABN Bank Import Test",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "AGE01",
      "Name": "Ageis Capital Demo 1",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "ANY",
      "Name": "Any Sl",
      "Partner": "",
      "Manager": "",
      "Administrator": "DW"
    },
    {
      "Key": "AOW1",
      "Name": "Oh Wonderful One",
      "Partner": "SPG",
      "Manager": "XXXXX",
      "Administrator": "DW"
    },
    {
      "Key": "APEX1",
      "Name": "Apex Test",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "APL.001",
      "Name": "Atlantic Test Ltd",
      "Partner": "",
      "Manager": "",
      "Administrator": ""
    },
    {
      "Key": "AX01",
      "Name": "Anglo Saxon Test Limited",
      "Partner": "THB",
      "Manager": "DW",
      "Administrator": "HL"
    },
    {
      "Key": "B123",
      "Name": "Demonstration Client",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    },
    {
      "Key": "C999",
      "Name": "C999 Client",
      "Partner": "",
      "Manager": "",
      "Administrator": "SD"
    }
  ];

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 0; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
//console.log(x.innerHTML.toLowerCase() , y.innerHTML.toLowerCase());
//return;

        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++; 
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  } 

}

