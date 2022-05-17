function App() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const fs = require('fs');
  const files = fs.readdirSync('./rgp_buck/rgp_main');

  const idx = getRandomInt(files.length());
  const im_url = files[idx];
  return (
    <div className="App">
    <link rel="im" href={im_url} />
    </div>
  );
}

export default App;
