module.exports = (data) => {
    const managerArr = data.filter(
        (employee) => employee.getRole() === "Manager"
    );
    const engineerArr = data.filter(
        (employee) => employee.getRole() === "Engineer"
    );
    const internArr = data.filter(
        (employee) => employee.getRole() === "Intern"
    );

    const managerString = managerArr.map((manager) => {
        return `<div class="p-0 card m-3 bg-info shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup" viewBox="0 0 16 16">
          <path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z"/>
        </svg> ${manager.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item"><a href="mailto:${manager.getEmail()}"></a></li>
          <li class="list-group-item">${manager.getOfficeNumber()}</li>
        </ul>
      </div>`;
    });
    const internString = internArr.map((intern) => {
        return `<div class="p-0 card m-3 bg-info shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg> ${intern.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.getId()}</li>
          <li class="list-group-item"><a href="mailto:${intern.getEmail()}"></a></li>
          <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
      </div>`;
    });
    const engineerString = engineerArr.map((engineer) => {
        return `<div class="p-0 card m-3 bg-info shadow" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
          <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
        </svg> ${engineer.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item"><a href="mailto:${engineer.getEmail()}"></a></li>
          <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}"></a></li>
        </ul>
      </div>`;
    });
    const managerJoin = managerString.join(" ");
    const internJoin = internString.join(" ");
    const engineerJoin = engineerString.join(" ");

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>Project Team Builder</title>
    </head>
    <body>
        <main class="container vh-100">
            <div class="row align-items-center justify-content-center vh-100">
                ${managerJoin}
                ${internJoin}
                ${engineerJoin}
            </div>
        </main>
    </body>
    </html>`;
};
