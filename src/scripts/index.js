

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
        var i = 1;
        
        data.results.forEach(lib => {
            
            const card = document.createElement('div')
            if(i%2 == 0){
                card.setAttribute('class', 'card1')
            }
            else{
                card.setAttribute('class', 'card2')
            }
            container.appendChild(card)

            // Create an h1 and set the text content to the film's title
            const a = document.createElement('p')
            a.textContent = lib.name
            a.setAttribute('class','card_text')

            card.addEventListener("click",event => {

                event.preventDefault()
        
                var element = document.getElementById("lib_container")
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }

                const url = 'https://api.cdnjs.com/libraries/' + lib.name
        
                fetch(url).then(response =>{
                    return response.json();
                }).then(lib_data =>{showLibData(lib_data)})
        
            })
            
            card.appendChild(a)
            i++

        });
    }


    function showLibData(lib_data){
       
        const container = document.getElementById("lib_container")
       
        const info = document.createElement('div')
        info.setAttribute('class', 'info')
        container.appendChild(info)

        const name = document.createElement('h1')
        name.textContent = lib_data.name
        name.setAttribute('id','name')
        info.appendChild(name)

        const description = document.createElement('h3')
        description.textContent = lib_data.description
        description.setAttribute('id','description')
        info.appendChild(description)

        const homepage = document.createElement('p')
        homepage.textContent = "Homepage: " + lib_data.homepage
        homepage.setAttribute('id','homepage')
        info.appendChild(homepage)

        const repository = document.createElement('p')
        repository.textContent = "Repository: " + lib_data.repository.url
        repository.setAttribute('id','repository')
        info.appendChild(repository)

        const version = document.createElement('p')
        version.textContent = "Version: " + lib_data.version
        version.setAttribute('id','version')
        info.appendChild(version)

    }

