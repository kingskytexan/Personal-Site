//This JavaScript script runs when you click the submit 
//	button will display to alert boxes in a row 
//	if you click on OK

document
    .getElementById("confirmClickActionElementId")
    .addEventListener("click", function( e ){ 
        if( ! confirm("Are you sure that you wanna do this?") ){
            e.preventDefault(); 
        } else {
            alert('Congrats!! Stewie wants you to see you...');
        }
    });