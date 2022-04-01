import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Create Playlist</h1>
    <form action="/action_page.php">
      <label for="fname">First name: </label>
      <input type="text" id="fname" name="fname" /><br /><br />
      <label for="lname">Last name: </label>
      <input type="text" id="lname" name="lname" /><br /><br />
      <input type="submit" value="Submit" onclick="myFunction()" />
    </form>

    <p>Click on the submit button to submit the form.</p>
    <div class="contains-item">
      <img
        src="https://upload.wikimedia.org/wikipedia/id/9/96/Adele_-_25_%28Official_Album_Cover%29.png"
      />
      <h1>When We Were Young</h1>
      <h2>Adele</h2>
      <h3>25</h3>
      <button>Button that does nothing</button>
    </div>
    </div>
  );
}

export default App;
