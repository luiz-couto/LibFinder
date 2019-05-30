

    const btn = document.getElementById("btn_submit")
    btn.addEventListener("click",event => {

        event.preventDefault()

        var element = document.getElementById("lib_container")
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        const query = document.getElementById("query").value
        const url = 'https://api.cdnjs.com/libraries?search=' + query

        fetch(url).then(response =>{
            return response.json();
        }).then(data =>{setData(data)})

    })


    function setData(data){
        
        const container = document.getElementById("lib_container")
        
        data.results.forEach(lib => {
            
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            container.appendChild(card)

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            card.appendChild(h1)
            h1.textContent = lib.name
            

        });
    }













// function go(){
    
//     fetch('https://api.cdnjs.com/libraries?search=npm').then(function(response) {
//         if(response.ok) {
//           response.blob().then(function(myBlob) {
//             var objectURL = URL.createObjectURL(myBlob);
//             console.log(objectURL)
//           });
//         } else {
//           console.log('Network response was not ok.');
//         }
//       })
//       .catch(function(error) {
//         console.log('There has been a problem with your fetch operation: ' + error.message);
//       });
    
//     return(
//         alert("OK")
//     )
// }
// async function fetchData() {

//     URL = 'https://api.cdnjs.com/libraries?search=npm' + query
       
//     const response = await fetch('https://api.cdnjs.com/libraries?search=npm');
//     const json = await response.json();
    
//     alert(json);
           
   
//   }
