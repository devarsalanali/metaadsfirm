import React, { useState } from "react"
import headsetVr from "../assets/images/headset-vr.png"
import "./Card.css"
import { Tilt } from "react-tilt"

export default function Card({ title, description, href }) {
	const defaultOptions = {
		reverse: true, // reverse the tilt direction
		max: 35, // max tilt rotation (degrees)
		perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
		scale: 1, // 2 = 200%, 1.5 = 150%, etc..
		speed: 2000, // Speed of the enter/exit transition
		transition: true, // Set a transition on enter/exit.
		axis: null, // What axis should be disabled. Can be X or Y.
		reset: true, // If the tilt effect has to be reset on exit.
		easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
	}
	return (
		<Tilt options={defaultOptions}>
			<a href={href}>
				<article
					style={{
						border: "30px solid transparent",
						borderImageSource: 'url("/images/gradient-border.png")',
						borderImageSlice: "30 fill",
						borderImageRepeat: "round",
						zIndex: 2,
					}}
				>
					<div className="rounded-lg bg-primary/[.05] backdrop-blur-[15px] p-[30px] m-[-28px] py-10 h-[26rem]">
						<img src={headsetVr} className="w-[8rem] mx-auto mb-8" alt="" />
						<div className="text-center">
							<h4 className="text-xl ff-against mb-2">{title}</h4>
							<p className="font-light">{description}</p>
						</div>
					</div>
				</article>
			</a>
		</Tilt>
	)
}
