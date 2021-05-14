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
   
    ${
        office.map(employee => {
            if(employee.getRole === 'Manager') {
                return `<div class="card">
            <div class="card-body">
            <div id="manager-card"> 
            <h1>${employee.name}</h1>
            <h2>ID: ${employee.id}</h2>
            <h2>Email:<a href="mailto: ${employee.email}">${employee.email}</a></h2>
            <h2>Office Number: ${employee.officeNumber}</h2>
            </div>
            </div>`
            }
            
        }).join("") 
    }
    
   
    ${
        office.map(employee => {
            if(employee.getRole === 'Engineer') {
                return `<div class="card">
            <div class="card-body">
            <div id="engineer-card"> 
            <h1>${employee.name}</h1>
            <h2>ID: ${employee.id}</h2>
            <h2>Email:<a href="mailto: ${employee.email}">${employee.email}</a></h2>
            <h2>GitHub: <a href="${employee.github}">${employee.github}</a></h2>
            </div>
            </div>`
            }
            
        }).join("") 
    }
    
    ${
        office.map(employee => {
            if(employee.getRole === 'Intern') {
                return `<div class="card">
            <div class="card-body">
            <div id="intern-card"> 
            <h1>${employee.name}</h1>
            <h2>ID: ${employee.id}</h2>
            <h2>Email:<a href="mailto: ${employee.email}">${employee.email}</a></h2>
            <h2>School: ${employee.school}</h2>
            </div>
            </div>`
            }
            
        }).join("") 
    }
    
    </body>
    </html>`
    return htmlWrapper;
}

module.exports = generateHtmlWrapper;