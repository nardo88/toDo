
const todoApi = {

     getData() {
        return fetch('http://localhost:3000/data/dataBase.json')
            .then(response => response.json())
    }
}

export default todoApi;



