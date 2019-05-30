

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
            const a = document.createElement('a')
            a.textContent = lib.name

            a.addEventListener("click",event => {

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

        });
    }


    function showLibData(lib_data){
       
        const container = document.getElementById("lib_container")
       
        const info = document.createElement('div')
        info.setAttribute('class', 'info')
        container.appendChild(info)

        const name = document.createElement('h1')
        name.textContent = lib_data.name
        info.appendChild(name)

        const description = document.createElement('h3')
        description.textContent = lib_data.description
        info.appendChild(description)

        const homepage = document.createElement('p')
        homepage.textContent = "Homepage: " + lib_data.homepage
        info.appendChild(homepage)

        const repository = document.createElement('p')
        repository.textContent = "Repository: " + lib_data.repository.url
        info.appendChild(repository)

        const version = document.createElement('p')
        version.textContent = "Version: " + lib_data.version
        info.appendChild(version)

    }

