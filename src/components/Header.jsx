

const Header = () => {
	return (
		<header className="header-wraper jl_header_magazine_style two_header_top_style header_layout_style3_custom jl_cus_top_share">
			<div className="jl_blank_nav" />
			<div id="menu_wrapper" className="menu_wrapper jl_menu_sticky jl_stick">
				<div className="container">
					<div className="row">
						<div className="main_menu col-md-12">
							<div className="logo_small_wrapper_table">
								<div className="logo_small_wrapper">
									{/* begin logo */}
									<a className="logo_link" href="index.html"><img className="jl_logo_n" src="img/logo_n.png" alt="akkn" /><img className="jl_logo_w" src="img/logo_w.png" alt="akkn" /></a>
									{/* end logo */}
								</div>
							</div>
							<div className="search_header_menu jl_nav_mobile">
								<div className="menu_mobile_icons">
									<div className="jlm_w">
										<span className="jlma" /><span className="jlmb" /><span className="jlmc" />
									</div>
								</div>
								<div className="search_header_wrapper search_form_menu_personal_click">
									<i className="jli-search" />
								</div>
								<div className="jl_day_night jl_day_en">
									<span className="jl-night-toggle-icon">
										<span className="jl_moon"> <i className="jli-moon" /> </span><span className="jl_sun"> <i className="jli-sun" /> </span></span>
								</div>
							</div>
							<div className="menu-primary-container navigation_wrapper jl_cus_share_mnu">
								<ul id="mainmenu" className="jl_main_menu">
									<li className="menu-item current-menu-item current_page_item">
										<a href="index.html">Home<span className="border-menu" /></a>
									</li>
									<li className="menu-item menu-item-has-children">
										<a href="#"> News </a>
										<ul className="sub-menu">
											<li className="menu-item menu-item-has-children">
												<a href="post-layout-1.html">PL - Global news<span className="border-menu" /></a>
												<ul className="sub-menu">
													<li className="menu-item">
														<a href="post-layout-1.html">PL 1 - West Africa<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-layout-2.html">PL 2 - Southern Africa<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-layout-3.html">PL 3 - African Union<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-layout-3.html">PL 3 - Eye witness report<span className="border-menu" /></a>
													</li>
												</ul>
											</li>
											<li className="menu-item menu-item-has-children">
												<a href="post-format-standard.html">PF - Sports <span className="border-menu" /></a>
												<ul className="sub-menu">
													<li className="menu-item">
														<a href="post-format-standard.html">Post format standard<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-format-gallery.html">Post format gallery<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-format-quote.html">Post Format Quote<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-format-video.html">Post format video<span className="border-menu" /></a>
													</li>
													<li className="menu-item">
														<a href="post-format-audio.html">Post format audio<span className="border-menu" /></a>
													</li>
												</ul>
											</li>
											<li className="menu-item">
												<a href="author.html">Author Page - Business<span className="border-menu" /></a>
											</li>
											<li className="menu-item">
												<a href="category.html">Category Page - Lifestyle <span className="border-menu" /></a>
											</li>
											<li className="menu-item">
												<a href="page-404.html">Page 404<span className="border-menu" /></a>
											</li>
										</ul>
									</li>
									<li className="menu-item">
										<a href="inspiration.html">Entertainment <span className="border-menu" /></a>
									</li>
									<li className="menu-item">
										<a href="category.html">Education <span className="border-menu" /></a>
									</li>
									<li className="menu-item">
										<a href="business.html"> Health </a>
									</li>
									<li className="menu-item ">
										<a href="shop.html">Advertorials <span className="border-menu" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>

	)
}

export default Header