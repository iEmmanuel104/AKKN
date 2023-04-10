import React from 'react'
import MainPost from './MainPost'
import SideBar from './SideBar'

const Hero = () => {
	return (
		<>
			<section className="home_section1">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="jl_mright_wrapper jl_clear_at">
								<div className="jl_mix_post">
									<MainPost />
									<SideBar />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}

export default Hero