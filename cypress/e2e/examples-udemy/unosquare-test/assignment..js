// Para la siguiente semana:
// Scenario 1: Cucumber
// Instalar Cucumber
// Re-hacer el mismo script en Gherkin language
// Creando el feature file y el step definition file
// Usar el pattern page object model
// Crear el mismo flujo usando una data table y vamos a buscar 3 items (Macbook air, Iphone 14 pro max,, Samsung Galaxy S23)
// Agregar Assertions para validar que el precio del item no esté vacío, no sea nulo y sea mayor a 0

// Scenario 2: Verify Hamburguer Left Menu
// Go to Amazon.com
// Click on the Left Menu (Todo)
// Verify elements in the menu section
// Buscar por departamento section should have visible:
// Electronicos
// Computadoras
// Smart Home
// Arte y Artesanias
// Programa y funcionalidades section should have:
// Tarjetas de regalo
// Shop by Interest
// Amazon Live
// Tienda internacional


// Scenario 3: Verify Hamburguer Left Menu - Negative Scenario

// Go to Amazon.com
// Click on the Left Menu (Todo)
// Verify elements in the menu section
// Buscar por departamento section should NOT have visible:
// TestingElement

//  

// Acceptance Criteria: 

// Use Json Files to provide the data you are looking for example, you will have a BuscarPorDepartamento.Json and ProgramayFuncionalidades.Json those files will contain all the elements that should be visible on the application
// Create a Negative scenario where you add an extra element that does not exist so the test can fail
// User Assertions to verify the items are visible
// Implement a List and a Loop
// Take a Screenshot for the failed scenario
//------------------------------------------------------------------------------------------------------

// API Testing:

// Create 2 scripts for NASA Apis

// Go to https://api.nasa.gov/
// You will have to generate an API Key that you should pass using an external data file
// Select 2 GET Requests and validate Response code == 200
// Validate response body


// Create 3 Scripts for https://reqres.in/

// Select 1 POST, 1 PUT and 1 DELETE
// Validate response codes == 200