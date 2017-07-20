//This JavaScript script runs when you click the submit 
//	button will display to alert boxes in a row 
//	if you click on OK. If you don't click on OK
//	it will close the first box and not continue onto the 
//	second one.

document
    .getElementById("confirmClickActionElementId")
    .addEventListener("click", function( e ){ 
        if( ! confirm("Are you sure that you wanna do this?") ){
            e.preventDefault(); 
        } else {
            alert('Congrats!! Stewie wants you to see you...');
        }
    });