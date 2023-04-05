class nasa_PO{

    client(){

    }

    genericGetRequest(myUrl, ){
        cy.request({
            method: "GET",
            url: myUrl,
            headers:
                { accept: "application/json" }
        }).then(response => {
        var body = JSON.parse(JSON.stringify(response.body))
        cy.log("My body : " + body);
        });
    }


}

export default nasa_PO;