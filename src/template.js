function generateHtmlWrapper(office) {
    var htmlWrapper = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <div id = "employee-card"> Alex
    </div>
   
    <div id = "manager-card"> Alex
    </div>
   
    <div id = "intern-card"> Alex
    </div>
    
    <div id = "engineer-card"> Alex
    </div>
    </body>
    </html>`
    return htmlWrapper;
}

module.exports = generateHtmlWrapper;