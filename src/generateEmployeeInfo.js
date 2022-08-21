//need to change info links
const index = require("../index");

function generateEmployeeInfo(info) {
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <title>Document</title>
  
</head>

<body>

  <header class="p-3 my-3 bg-danger text-white text-center">
<h1>My Team</h1>

  </header>


<div class="container">
  <div class="row row-cols-1 row-cols-md-3 d-flex justify-content-center g-1">
    <div class="col-6">
  <div class="card text-bg-light mb-3 shadow" style="max-width: 18rem;">
    <!-- Input name -->
    <div class="card-header bg-primary text-white"><h1>${info.name}
      <br>
     ☕️ ${info.role}</h1>
    </div>
    <div class="card-body">
 
      <ul class="list-group list-group-flush">
<!-- Input email and github -->

        <li class="list-group-item">ID: ${info.id} </li>
        <li class="list-group-item">Email:${info.MEmail}</li>
        <li class="list-group-item">Office number:${info.Office}</li>
      </ul>
    </div>
  </div>
</div>
  <div class="col-6">
  <div class="card text-bg-light mb-3 shadow col" style="max-width: 18rem;">
    <div class="card-header bg-primary text-white"><h1>${info.Employee} 
    <br>
     ${info.role}</h1>
  </div>
    </div>
    <div class="card-body">
 
      <ul class="list-group list-group-flush">
        <!-- Input email and github -->
        <li class="list-group-item">ID:${info.EmployeeID}</li>
        <li class="list-group-item">Email:${info.EEmail}</li>
        <li class="list-group-item">GitHub:${info.GitHub}</li>
      </ul>
    </div>
  </div>
</div>
  <div class="col-6">
  <div class="card text-bg-light mb-3 shadow col" style="max-width: 18rem;">
    <div class="card-header bg-primary text-white"><h1>${info.Employee} 
      <br>
       ${info.role}</h1>
    </div>
    <div class="card-body">
 
      <ul class="list-group list-group-flush">
        <!-- Input email and github -->
        <li class="list-group-item">ID:${info.EmployeeID}</li>
        <li class="list-group-item">Email:${info.EEmail}</li>
        <li class="list-group-item">GitHub:${info.GitHub}</li>
      </ul>
    </div>
  </div>
</div>

<div class="col-6">
  <div class="card text-bg-light mb-3 shadow col" style="max-width: 18rem;">
    <div class="card-header bg-primary text-white"><h1>${info.Employee} 
      <br>
      ${info.role}</h1>
    </div>
    <div class="card-body">
 
      <ul class="list-group list-group-flush">
        <!-- Input email and github -->
        <li class="list-group-item">ID:${info.EmployeeID}</li>
        <li class="list-group-item">Email:${info.EEmail}</li>
        <li class="list-group-item">GitHub:${info.GitHub}</li>
      </ul>
    </div>
  </div>
</div>
<div class="col-6">
  <div class="card text-bg-light mb-3 shadow col" style="max-width: 18rem;">
    <div class="card-header bg-primary text-white"><h1>${info.Employee}  
      <br>
     ${info.role}</h1>
    </div>
    <div class="card-body">
 
      <ul class="list-group list-group-flush">
        <!-- Input email and School -->
        <li class="list-group-item">ID:${info.EmployeeID}</li>
        <li class="list-group-item">Email:${info.EEmail}</li>
        <li class="list-group-item">GitHub:${info.GitHub}</li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>

</body>
</html>`;
}
module.exports = generateEmployeeInfo;
