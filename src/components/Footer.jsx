import React from 'react'

const Footer = () => {
	return (
		<footer id="footer-container" className="jl_footer_act enable_footer_columns_dark">
			<div className="footer-columns">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div id="akkn_about_us_widget-2" className="widget jellywp_about_us_widget">
								<div className="widget_jl_wrapper about_widget_content">
									<div className="jellywp_about_us_widget_wrapper">
										<img className="footer_logo_about" src="img/logo_w.png" alt />
										<p>
											Lorem ipsum dolor sit amet,
											consectetuer adipiscing elit
											Aenean commodo ligula eget
											dolor aenean massa cum
											sociis natoque penatibus et
											magnis cum aenean massa cum
											sociis natoque penatibus
										</p>
										<div className="social_icons_widget">
											<ul className="social-icons-list-widget icons_about_widget_display" />
										</div>
									</div>
								</div>
							</div>
							<div id="akkn_about_us_widget-4" className="widget jellywp_about_us_widget">
								<div className="widget_jl_wrapper about_widget_content">
									<div className="jellywp_about_us_widget_wrapper">
										<div className="social_icons_widget">
											<ul className="social-icons-list-widget icons_about_widget_display">
												<li>
													<a href="#" className="facebook" target="_blank"><i className="jli-facebook" /></a>
												</li>
												<li>
													<a href="#" className="youtube" target="_blank"><i className="jli-youtube" /></a>
												</li>
												<li>
													<a href="#" className="instagram" target="_blank"><i className="jli-instagram" /></a>
												</li>
												<li>
													<a href="#" className="twitter" target="_blank"><i className="jli-twitter" /></a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div id="akkn_recent_post_text_widget-8" className="widget post_list_widget" />
						</div>
						<div className="col-md-4">
							<div className="widget_jl_wrapper jl_clear_at">
								<div id="akkn_category_image_widget_register-2" className="widget jellywp_cat_image">
									<div className="widget-title">
										<h2 className="jl_title_c">
											Categories
										</h2>
									</div>
									<div className="wrapper_category_image">
										<div className="category_image_wrapper_main">
											<ul>
												<li className>test</li>
												<li className>test</li>
												<li className>test</li>
												<li className>test</li>
												<li className>test</li>
												<li className>test</li>
												<li className>test</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom enable_footer_copyright_dark">
				<div className="container">
					<div className="row bottom_footer_menu_text">
						<div className="col-md-12">
							<div className="jl_ft_w">
								© Copyright 2020 AKKN. All rights
								reserved powered by AKKN
								<ul id="menu-footer-menu" className="menu-footer">
									<li className="menu-item menu-item-6">
										<a title href="#">About Us</a>
									</li>
									<li className="menu-item menu-item-7">
										<a title href="#">Private policy</a>
									</li>
									<li className="menu-item menu-item-8">
										<a title href="#">Forums</a>
									</li>
									<li className="menu-item menu-item-9">
										<a title href="#">Community</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>

	)
}

export default Footer