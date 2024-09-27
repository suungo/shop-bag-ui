function header() {
  return (
    <header>
      <div className="header-navbar width-screen">
        <div className="logo">
          <h1>LIELIE</h1>
          <h1>BAG</h1>
        </div>
        <div className="navbar-list">
          <a className="home" href="">
            Trang Chủ
          </a>
          <a className="hand-bag" href="">
            Túi Cao Cấp
          </a>
          <span className="account">
            Tài Khoản
            <div className="account-list">
              <ul className="account-list-all">
                <li>Thông tin cá nhân</li>
                <li>Đăng kí tài khoản</li>
                <li>Đăng xuất</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}
export default header;
