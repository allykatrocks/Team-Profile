function generateHtmlWrapper(office) {
    var htmlWrapper = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Office Cards</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
    <header>
    <h1>Our Office Team</h2>
    </header>
    <div class="col-sm-9" id="cards">
    <div class="card">
    <div class="card-body">
    <div id = "employee-card"> 
    <h1>Alex</h1>
    <h2><a href="beatles101@cox.net">beatles101@cox.net</a></h2>
    <h2><a href="https://github.com/allykatrocks">GitHub</a></h2>
    </div>
    </div>
    ${
        office.map(employee => {
            if(employee.getRole === 'Manager') {
                return `<div class="card">
            <div class="card-body">
            <div id="manager-card"> 
            <h1>${employee.name}</h1>
            <h2><a href="mailto: ${employee.email}">${employee.email}</a></h2>
            </div>
            </div>`
            }
            
        }).join("") 
    }
    
   
    <div id="intern-card"> 
    <div class="card-body">
    <h1>Alex</h1>
    <h2><a href="beatles101@cox.net">beatles101@cox.net</a></h2>
    <h2><a href="https://github.com/allykatrocks">GitHub</a></h2>
    </div>
    </div>
    
    <div id="engineer-card"> 
    <div class="card-body">
    <h1>Alex</h1>
    <h2><a href="beatles101@cox.net">beatles101@cox.net</a></h2>
    <h2><a href="https://github.com/allykatrocks">GitHub</a></h2>
    </div>
    </div>
    </div>
    </body>
    </html>`
    return htmlWrapper;
}

module.exports = generateHtmlWrapper;