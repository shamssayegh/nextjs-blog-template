import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  // Conditional check to see if we're on the search page
  const isSearchPage = router.pathname === '/search';

  return (
    <header className="main-header header-style-1 font-heading">
      <div className="header-top">
        <div className="container">
          <div className="row pt-20 pb-20">
            <div className="col-md-3 col-xs-6">
              <Link href="/">
                <a>
                  <img className="logo" src="/assets/imgs/theme/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="col-md-9 col-xs-6 text-right header-top-right">
              <ul className="list-inline nav-topbar d-none d-md-inline">
                <li className="list-inline-item menu-item-has-children">
                  <a href="#">Layouts</a>
                  <ul className="sub-menu font-small">
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu font-small">
                        <li><Link href="/page-about"><a>About</a></Link></li>
                        <li><Link href="/page-contact"><a>Contact</a></Link></li>
                        <li><Link href="/page-typography"><a>Typography</a></Link></li>
                        <li><Link href="/page-register"><a>Register</a></Link></li>
                        <li><Link href="/page-login"><a>Login</a></Link></li>
                        <li><Link href="/search"><a>Search</a></Link></li>
                        <li><Link href="/page-author"><a>Author</a></Link></li>
                        <li><Link href="/page-404"><a>404 page</a></Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Single Post Pages</a>
                      <ul className="sub-menu font-small">
                        <li><Link href="/single"><a>Default Post</a></Link></li>
                        <li><Link href="/single-2"><a>Big Image Post</a></Link></li>
                        <li><Link href="/single-3"><a>Left Image Post</a></Link></li>
                        <li><Link href="/single-post-right-sidebar"><a>Post with Right Sidebar</a></Link></li> {/* New page */}
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="list-inline-item">
                  <Link href="http://demos.alithemes.com/html/stories/docs/">
                    <a><i className="elegant-icon icon_document_alt mr-5"></i>Document</a>
                  </Link>
                </li>
              </ul>
              <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
              {!isSearchPage && (
                <button className="search-icon d-none d-md-inline">
                  <span className="mr-15 text-muted font-small">
                    <i className="elegant-icon icon_search mr-5"></i>Search
                  </span>
                </button>
              )}
              <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="header-sticky">
        <div className="container align-self-center">
          <div className="mobile_menu d-lg-none d-block"></div>
          <div className="main-nav d-none d-lg-block float-left">
            <nav>
              <ul className="main-menu d-none d-lg-inline font-small">
                <li className="menu-item-has-children">
                  <Link href="/">
                    <a><i className="elegant-icon icon_house_alt mr-5"></i> Home</a>
                  </Link>
                  <ul className="sub-menu text-muted font-small">
                    <li><Link href="/"><a>Home default</a></Link></li>
                    <li><Link href="/home-2"><a>Homepage 2</a></Link></li>
                    <li><Link href="/home-3"><a>Homepage 3</a></Link></li>
                  </ul>
                </li>
                <li><Link href="/category-list"><a>Travel</a></Link></li>
                <li><Link href="/category-list"><a>Destinations</a></Link></li>
                <li><Link href="/category-grid"><a>Guides</a></Link></li>
                <li><Link href="/category-masonry"><a>Food</a></Link></li>
                <li><Link href="/category-big"><a>Hotels</a></Link></li>
              </ul>
              <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                <li className="menu-item-has-children">
                  <Link href="/"><a>Home</a></Link>
                  <ul className="sub-menu text-muted font-small">
                    <li><Link href="/"><a>Home default</a></Link></li>
                    <li><Link href="/home-2"><a>Homepage 2</a></Link></li>
                    <li><Link href="/home-3"><a>Homepage 3</a></Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="float-right header-tools text-muted font-small">
            <ul className="header-social-network d-inline-block list-inline mr-15">
              <li className="list-inline-item">
                <a className="social-icon fb text-xs-center" href="#" target="_blank">
                  <i className="elegant-icon social_facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon tw text-xs-center" href="#" target="_blank">
                  <i className="elegant-icon social_twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-icon pt text-xs-center" href="#" target="_blank">
                  <i className="elegant-icon social_pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      {/* Add search form if it's the search page */}
      {isSearchPage && (
        <div className="main-search-form">
          <div className="container pt-50 pb-50">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input type="text" className="form-control" placeholder="Search stories, places and people" />
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit">
                        <i className="elegant-icon icon_search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
