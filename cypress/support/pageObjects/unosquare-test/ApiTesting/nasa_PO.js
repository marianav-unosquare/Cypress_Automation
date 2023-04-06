class nasa_PO{


    genericGetRequest(myUrl){
        request = cy.request({
            method: "GET",
            url: myUrl,
            headers:
                { accept: "application/json" }
        }).then(response => {
        var body = JSON.parse(JSON.stringify(response.body))
        });
    }
    


}

export default nasa_PO;