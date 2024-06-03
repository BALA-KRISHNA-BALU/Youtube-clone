const Navbar = () => {
  return <div className="navbar">
    <div className="youtube-flex">
      <i class="bi bi-justify"></i>
      <div className="youtube">
        <img className="img" src="https://cdn-icons-png.flaticon.com/512/5968/5968852.png"></img>
        <h1>YouTube</h1>
      </div>
      <div className="input-flex">
        <input className="input" type="text" placeholder="Search"></input>
        <button className="nav-btn"><i class="bi bi-search"></i></button>
        <img className="record" src="https://cdn-icons-png.flaticon.com/128/709/709950.png"></img>
      </div>
      <div className="account-flex">
        <i class="bi bi-three-dots-vertical"></i>
        <div className="account">
          <img className="acoount-img" src="https://cdn2.iconfinder.com/data/icons/basic-thin-line-color/21/15-512.png"></img>
          <p>Sign in</p>
        </div>

      </div>

    </div>
  </div>
}
export default Navbar