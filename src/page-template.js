////include const of all 3 employee type and file paths
const cardEngineer = require('../lib/engineer');
const cardIntern = require('../lib/intern');
const cardManager = require('../lib/manager');


  
  // create the projects section //// refactor to a constructor function

class htmlGen {
  
     newHtml(cardManager, cardEngineer, cardIntern) {

     }
}

  
    return ` ${cardManager
          .filter(({ feature }) => feature)
          .map(({ name, id, email, officeNumber }) => {
            return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateRoster(roster)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
          }
  })

  
  ////////////////////////////////////////////////////////////////

  // export function to generate entire page
  /*module.exports = templateData => {
 

     return ` ${cardEnginer
          .filter(({ feature }) => feature)
          .map(({ name, id, email,  }) => {
            return `
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateRoster(roster)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };

///////////////////////////////////////////////////////////////////////

     return ` ${cardIntern
          .filter(({ feature }) => feature)
          .map(({ name, id, email, school }) => {
            return `
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>
      <main class="container my-5">
        ${generateAbout(about)}
        ${generateRoster(roster)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2020 by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };*/


 