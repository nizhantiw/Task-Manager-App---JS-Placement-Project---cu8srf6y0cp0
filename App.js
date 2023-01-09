
let boxes = document.getElementsByClassName('box');

document.getElementById('error').innerHTML = "";
let button = document.getElementById('button');
button.addEventListener('click', addTask);
function addTask() {
    document.getElementById('error').innerHTML = " ";
    let text = document.getElementById('text').value;
    //check if text box is empty
    if (text == '') {
        document.getElementById('error').innerHTML = "Please Enter The Task";
    }
    //check if text box is not empty
    else {

        var open = document.getElementById('open');
        var divTaskAndDiscr = document.createElement('div');
        divTaskAndDiscr.className = 'contener'
        divTaskAndDiscr.draggable = 'true';

        let isclick = true;
        divTaskAndDiscr.addEventListener('click', (e) => {
            if (isclick) {
                openTextBox();
                isclick = false;
            }
        })


        //click on div tag then open textarea for edit discription
        function openTextBox() {
            var textArea = document.createElement('textarea');
            p.appendChild(textArea)
            let addDiscriptionBtn = document.createElement('button');
             addDiscriptionBtn.appendChild(document.createTextNode("Add Discription"));
            // addDiscriptionBtn.append('<i class="fa fa-times" aria-hidden="true"></i>');
            p.appendChild(addDiscriptionBtn);



            //add Discription for Task
            addDiscriptionBtn.addEventListener('click', (e) => {
                addDiscription();
            })
            function addDiscription() {
                let textValue = textArea.value;
                if (textValue == '')
                 {
                    // Display an error message or do nothing
                 } 
                else
                   {
                    // Create a new element to display the text
                    let textNode = document.createTextNode(textValue);
                    p.appendChild(textNode);
                    divTaskAndDiscr.appendChild(p);
                    textArea.style.display = "none";
                    addDiscriptionBtn.style.display = "none";
                   }
            }
        }

        var h3 = document.createElement('h3');
        h3.appendChild(document.createTextNode(text));
        var p = document.createElement('p');
        divTaskAndDiscr.appendChild(h3);
        divTaskAndDiscr.appendChild(p);
        open.appendChild(divTaskAndDiscr);


       //Drag and Drop code

       let draggedItem = null;


       divTaskAndDiscr.addEventListener('dragstart', (e) => {
           console.log("Drag start has been Trigered");
           draggedItem=divTaskAndDiscr;
           setTimeout(() => {
               // e.target.className = "hide";
               divTaskAndDiscr.style.display="none";

           }, 0);

        })
        divTaskAndDiscr.addEventListener('dragend', (e) => {
           console.log("Drag end has been Trigered");
           draggedItem.style.display ="flex";
           draggedItem=null;
           // e.target.className = 'contener';
        })

         for (box of boxes) {

           box.addEventListener('dragover', (e) => {
               console.log("Dragover has been trigered");
               e.preventDefault();
           })

           box.addEventListener('dragenter', (e) => {
               console.log("Dragenter has been trigered");
               e.preventDefault();
           })

           box.addEventListener('dragleave', (e) => {
               console.log("Dragleave has been trigered");
               e.preventDefault();
           })

           box.addEventListener('drop', (e) => {
               console.log("Drop has been trigered");
               e.preventDefault();
               // e.target.append(divTaskAndDiscr);
               e.target.appendChild(draggedItem);

           })

        }

    }
    console.log("Clicked");
}
