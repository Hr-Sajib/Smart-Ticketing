
// ________utility functions_____________________________________________________ //


function changeBgToGreen(id){
    document.getElementById(id).classList.add('bg-green-500')
}

function disableOtherSeats(seatArray,seatSelected){
    const a = seatArray;
    const b = seatSelected;

    for(const item of a){
        if(!b.includes(item)){
            document.getElementById(item).classList.add('bg-red-100','pointer-events-none');
        }
        else{
            document.getElementById(item).classList.add('pointer-events-none');
        }
    }
}







// ________main proc_____________________________________________________ //




//go to buy section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
  }
  


    // seat select part 

    const seatArray = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
    let seatSelected = [];

    document.getElementById('seatsList').addEventListener('click', function (event){
        const clickedSeatId = (event.target.id)
        
        if(seatArray.includes(clickedSeatId)){

            //selected seat bg to green 
            changeBgToGreen(clickedSeatId);
            
            //disable the selected seat
            document.getElementById(clickedSeatId).classList.add('pointer-events-none');
            
            // edit can book count
            const canBook = parseInt(document.getElementById('canBookSeatCount').innerText)
            document.getElementById('canBookSeatCount').innerText = canBook-1;

            // edit can book count
            const emptySeats = parseInt(document.getElementById('emptySeatCount').innerText)
            document.getElementById('emptySeatCount').innerText = emptySeats-1;



            seatSelected.push(clickedSeatId);
            console.log(seatSelected)
            
            if(seatSelected.length ===4){
                disableOtherSeats(seatArray,seatSelected);
                
            }
        }
    })


