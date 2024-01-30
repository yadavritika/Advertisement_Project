import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar background h-nav">
      <ul class="nav-list v-class">
        <div class="logo"><img src="img/logo.png" alt="Logo" /></div>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="buy.html">Buy</a></li>
        <li><a href="sell.html">Sell</a></li>
      </ul>
      <div class="rightNav v-class">
        <input type="text" name="search" id="search" />
        <button class="btn btn-sm">Search</button>
      </div>
    </nav>

    <section class="background firstSection">
      <div class="box-main">
        <div class="firstHalf">
          <p class="text-big">Buy Now..</p>
        </div>
      </div>
    </section>

    <h1 id="header">Join Us To Buy Your Dream House</h1>

    <div class="container-jobs">
      <div class="jobs">
        <div class="job-description">
          <div class="grid-item">
            <h2 class="job-title">Malad, Kandivali, Goregaon</h2>
            <p class="job-details">
              <br />
              Contact Us now to get best deals on these areas and to buy house
              at cheap price and and at well mannered society. Just fill the
              form to let us know your details regarding where and what type of
              house do you want. <br /><br />
            </p>
          </div>
          <div class="grid-item1">
            <a href="apply.html">
              <button
                class="applynow-link"
                id="fullstackjava"
                onclick="roleupdate(this.id)"
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>

        <div class="job-description">
          <div class="grid-item">
            <h2 class="job-title">Borivali, Andheri, Jogeshwari</h2>
            <p class="job-details">
              <br />
              Contact Us now to get best deals on these areas and to buy house
              at cheap price and and at well mannered society. Just fill the
              form to let us know your details regarding where and what type of
              house do you want.
              <br /><br />
            </p>
          </div>
          <div class="grid-item1">
            <a href="apply.html">
              <button
                class="applynow-link"
                id="fullstackjava"
                onclick="roleupdate(this.id)"
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>
        <div class="job-description">
          <div class="grid-item">
            <h2 class="job-title">Remaing parts of Mumbai</h2>
            <p class="job-details">
              <br />
              Contact Us now to get best deals on these areas and to buy house
              at cheap price and and at well mannered society. Just fill the
              form to let us know your details regarding where and what type of
              house do you want. <br /><br />
            </p>
          </div>
          <div class="grid-item1">
            <a href="apply.html">
              <button
                class="applynow-link"
                id="fullstackjava"
                onclick="roleupdate(this.id)"
              >
                Apply Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer class="background">
      <p class="text-footer">
        Copyright &copy; 2027 - www.RealEstate.com - All rights reserved
      </p>
    </footer>
    </div>
  );
}

export default App;
