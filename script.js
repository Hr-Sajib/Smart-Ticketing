
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

            // edit empty seat count
            const emptySeats = parseInt(document.getElementById('emptySeatCount').innerText)
            document.getElementById('emptySeatCount').innerText = emptySeats-1;

            // edit selected seat count
            const selSeats = parseInt(document.getElementById('seatSelectCount').innerText)
            document.getElementById('seatSelectCount').innerText = selSeats+1;

            // add tickets to price list
            const newTicket = document.createElement('div');
            const newTID = 'T'+ clickedSeatId;
            newTicket.innerHTML = `<div class="flex justify-around pt-2 font-bold text-green-700"><p id="${newTID}">C2</p><p>Economy</p><p>550</p></div>`
            document.getElementById('ticketList').appendChild(newTicket);
            document.getElementById(newTID).innerText = clickedSeatId;

            // update total price
            const totalPrice = parseInt(document.getElementById('totalPriceTk').innerText);
            const updatedPrice = totalPrice + 550;
            document.getElementById('totalPriceTk').innerText = updatedPrice;
            document.getElementById('grandTotalTk').innerText = updatedPrice;


            // update array of selected seats
            seatSelected.push(clickedSeatId);
            console.log(seatSelected) 

            // handle the NEXT button
            nextBtnHandle();
            
            if(seatSelected.length ===4){
                disableOtherSeats(seatArray,seatSelected);
                
                //enable coupon button 
                document.getElementById('applyCpnBtn').removeAttribute('disabled')

                //add discount
                document.getElementById('applyCpnBtn').addEventListener('click',function(){


                    const grdTotal = document.getElementById('grandTotalTk').innerText;
                    let updatedGrdTotal=0;

                    if(document.getElementById('couponInput').value === 'NEW15'){
                         updatedGrdTotal = grdTotal - (grdTotal*(15/100));
                         document.getElementById('applyCpnBtn').innerText = 'Applied';
                         document.getElementById('couponInput').classList.add('hidden');
                         const b =document.getElementById('applyCpnBtn');
                         b.disabled = true;

                    }
                    else if(document.getElementById('couponInput').value === 'Couple 20'){
                         updatedGrdTotal = grdTotal - (grdTotal*(20/100));
                         document.getElementById('applyCpnBtn').innerText = 'Applied';
                         document.getElementById('couponInput').classList.add('hidden');
                         const b =document.getElementById('applyCpnBtn');
                         b.disabled = true;

                    }
                    else{
                        updatedGrdTotal = grdTotal;

                        alert('Enter a Valied Coupon!')
                    }

                    document.getElementById('grandTotalTk').innerText = updatedGrdTotal;





                })



              


            }
        }
    })

function nextBtnHandle(){
    
    document.getElementById('phoneNumber').addEventListener('input',function(){
            const nextButton = document.getElementById('nextBtn');
            nextButton.disabled = false;         
    })

    document.getElementById('nextBtn').addEventListener('click', function(){
        document.getElementById('headDiv').classList.add('hidden');
        document.getElementById('mainSec').classList.add('hidden');
        document.getElementById('footerDiv').classList.add('hidden');
        document.getElementById('lastPage').classList.remove('hidden');
    })

}

    


