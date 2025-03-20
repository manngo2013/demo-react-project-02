const studentName = "Adam Nguyen";
const age = 18;

const employee = {
  username: "John",
  age: 20,
};

function App() {
  return (
    <div className="App">
      <h1>
        Hello: {studentName} - {age}
      </h1>
      <br />
      <h2>
        Employee: {employee.username} - {employee.age}
      </h2>
    </div>
  );
}

export default App;
