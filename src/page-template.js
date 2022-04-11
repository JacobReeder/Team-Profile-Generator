////include const of all 3 employee type and file paths
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

class htmlGen {
  
     newHtml(cardManager, cardEngineer, cardIntern) {

     return ` ${cardManager
          .filter(({ name }) => name)
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
     <title>Team Gen</title>
      </head>
    
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">New Team</h1>
          <nav class="flex-row">
          </nav>
        </div>
      </header>

      <div class="col-sm">
      <div class="card">
          <div class="card-header">
              <h3 class="card-title">${name}}</h3>
              <h3 class="card-title"> <i class="fas fa-mug-hot"></i> ${this.getManager(cardManager)}</h3>
          </div>
          <div class="card-body">
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${id}</li>
              <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
              <li class="list-group-item">Office Number: ${officeNumber}</li>
              </ul>
          </div>
      </div>
  </div>
`;
})
.join('')}

   ${cardEngineer
          .filter(({ name }) => name)
          .map(({ name, id, email, gitHub }) => {
            return `
            <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${name}}</h3>
                    <h3 class="card-title"> <i class="fas fa-mug-hot"></i> ${this.getEngineer(cardEngineer)}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                    <li class="list-group-item">Office Number: ${gitHub}</li>
                    </ul>
                </div>
            </div>
        </div>
      `;
      })
      .join('')}
   
     ${cardIntern
          .filter(({ feature }) => feature)
          .map(({ name, id, email, school }) => {
            return `
            <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${name}}</h3>
                    <h3 class="card-title"> <i class="fas fa-mug-hot"></i> ${this.getIntern(Intern)}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                    <li class="list-group-item">Office Number: ${school}</li>
                    </ul>
                </div>
            </div>
        </div>
      `;
      })
      .join('')}
      
      </div>
      </div>
      </body>
</html>
        `
}
    getManager(cardManager) {
      this.manager = new Manager(cardManager)
      return this.manager.getRole()
    }

    getEngineer(cardEngineer) {
      this.engineer = new Engineer(cardEngineer)
      return this.engineer.getRole()
    }

    getIntern(cardIntern) {
      this.intern = new Intern(cardIntern)
      return this.intern.getRole()
    }

}
  
  module.exports = new htmlGen()
  
  


 