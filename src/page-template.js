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
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./style.css">
     <title>Team Gen</title>
      </head>
    
      <header class="header-bag">
      <h1 class="align-self-center"> <i class="icon-coffee"></i> My Team</h1>
  </header>
  <div class="container">
      <div class="row">

      <div class="col-sm">
      <div class="card">
          <div class="card-header">
              <h3 class="card-title">${name}</h3>
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
                    <h3 class="card-title">${name}</h3>
                    <h3 class="card-title"> <i class="fas fa-glasses"></i> ${this.getEngineer(cardEngineer)}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a> </li>
                    <li class="list-group-item">Github: <a href="https://github.com/${gitHub}/" target="_blank">GitHub</a> </li>
                    </ul>
                </div>
            </div>
        </div>
      `;
      })
      .join('')}
   
     ${cardIntern
          .filter(({ name }) => name)
          .map(({ name, id, email, school }) => {
            return `
            <div class="col-sm">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${name}</h3>
                    <h3 class="card-title"> <i class="fas fa-user-graduate"></i> ${this.getIntern(cardIntern)}</h3>
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

      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
      
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
  
  module.exports = htmlGen
  
  


 