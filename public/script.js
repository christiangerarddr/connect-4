$( document ).ready(function() {

    var player_turn = 0;

    var dimention = [
        [1, 2, 3, 4, 5, 6, 7],
        [11, 12, 13, 14, 15, 16, 17],
        [21, 22, 23, 24, 25, 26, 27],
        [31, 32, 33, 34, 35, 36, 37],
        [41, 42, 43, 44, 45, 46, 47],
        [51, 52, 53, 54, 55, 56, 57],
    ];

    var last_cell;

    $(".button").click(function(){

        var button_col = $(this).attr("this_column");
        var column_cells = $("div[this_column='" + button_col + "']").get().reverse();

        change_color(column_cells);

        cell_location();

        check_win();

        player_turn++;
        
    });


    function change_color(column_cells) {

        for (let i = 0; i < column_cells.length-1; ++i) {
            if(column_cells[i].hasAttribute("status", "done")){
                continue;
            }else{
                if(player_turn%2 == 0){
                    column_cells[i].style.backgroundColor = "red";
                    column_cells[i].setAttribute("color", "red");

                    last_cell = column_cells[i];

                }else{
                    column_cells[i].style.backgroundColor = "blue";
                    column_cells[i].setAttribute("color", "blue");

                    last_cell = column_cells[i];
                }
                column_cells[i].setAttribute("status", "done");
                break;
            }
        }
    }

    function cell_location(){

        var color = last_cell.getAttribute("color");
        var id = last_cell.id;
        var row = id.substr(1, 1)-1;
        var column = id.substr(3, 3);
        dimention[row][column] = color; 

        // console.log(dimention);

    }

    function check_win(){ 

        
        //top-to-bottom
        for (let c = 0; c < 7; c++) { // 7
            
            top_to_bottom = [1, 2, 3, 4, 5, 6];
            var corrects = 1;

            for (let r = 0; r < 6; r++) {
                top_to_bottom[r] = dimention[r][c];
            }
    
            top_to_bottom;

            for (let x = 0; x < 6; x++) {
                if(x < 5 && top_to_bottom[x] == top_to_bottom[x+1]){
                    corrects++;
                    if(corrects > 3){
                        if(last_cell.getAttribute("color") === "red"){
                            alert("congratulations player 1!");
                            window.location.reload();
                        }else{
                            alert("congratulations player 2!");
                            window.location.reload();
                        }
                    }
                }else{
                    corrects = 1;
                }
            }
        }

        //left-to-right
        for (let r = 5; r >= 0; r--) {
            
            left_to_right = [11, 12, 13, 14, 15, 16, 17];

            var corrects = 1;

            for (let c = 0; c < 7; c++) {
                left_to_right[c] = dimention[r][c];
            }
            for (let x = 0; x < 7; x++) {
                if(x < 5 && left_to_right[x] == left_to_right[x+1] && left_to_right[x+1] == left_to_right[x+2]){
                    corrects++;
                    if(corrects > 2){
                        if(last_cell.getAttribute("color") === "red"){
                            alert("congratulations player 1!");
                            window.location.reload();
                        }else{
                            alert("congratulations player 2!");
                            window.location.reload();
                        }
                    }
                }
            }
            // break;
        }

    }

});