import { useEffect, useRef, useState } from "react"
import headImage from "../../assets/images/head-modal.png"
import Card from "../../components/Card"
import { useNavigate } from "react-router-dom"

export default function Features() {
	const navigate = useNavigate()
	return (
		<section
			className="mt-[10rem] relative lg:mx-[5rem] xl:mx-[8rem]"
			id="services"
		>
			<img
				src={headImage}
				alt=""
				className="w-[28rem] mx-auto absolute inset-x-0"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[2rem] relative top-[17rem] mb-[24rem]">
				<Card
					title="Metaverse Web Builders"
					description="we transform your website into fully immersive and interactive web
							3 experiences."
					href="#contact-form"
				/>
				<Card
					title="Smart Contract development"
					description="We develop custom smart contracts and launch them on the bockchain."
					href="#contact-form"
				/>
				<Card
					title="Virtual wearables"
					description="We help you create WEB 3 brand recognition with your brands custom virtual wearables that can be bought, sold or traded on NFT marketplaces."
					href="#contact-form"
				/>
				<Card
					title="VR/AR/MR"
					description="Launch your brand with our virtual, augmented and mixed reality experiences."
					href="#contact-form"
				/>
				<Card
					title="Virtual real estate"
					description="Consider us your Meta-realtor! We guide you through the process of buying, renting or leasing virtual real estate."
					href="#contact-form"
				/>
				<Card
					title="Gamification"
					description="Immerse your clients and customer base with your brand specific gaming experiences."
					href="#contact-form"
				/>
			</div>
		</section>
	)
}
