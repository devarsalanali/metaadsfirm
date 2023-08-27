import React, { useState } from "react"
import mainImage from "../../assets/images/person-with-vr.png"
import Input from "../../components/form/Input"
import Textarea from "../../components/form/Textarea"
import emailjs from "emailjs-com"
import ReCAPTCHA from "react-google-recaptcha"

export default function Contact() {
	const [captchaValue, setCaptchaValue] = useState(null)

	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		message: "",
	})

	const handleSendMail = async () => {
		// if (!captchaValue) {
		// 	alert("Please complete the reCAPTCHA verification.")
		// 	return
		// }

		try {
			await emailjs.send(
				"service_kv5tfe9", // service ID
				"template_ahdbe0j", // template ID
				{
					from_name: formData.fullName,
					from_mail: formData.email,
					message: formData.message,
				},
				"SyGYyuk7Q1JJNkcXr" // Replace with your user ID
			)

			alert("Email sent successfully!")
			setFormData({
				fullName: "",
				email: "",
				message: "",
			})
		} catch (error) {
			alert("An error occurred while sending the email.")
		}
	}

	const handleCaptchaChange = value => {
		setCaptchaValue(value)
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	return (
		<section
			className="grid flex-row-reverse lg:grid-cols-2 mt-[12rem] lg:mx-20 items-end"
			id="contact-form"
		>
			<div className="flex gap-6 md:gap-12 items-center text-right order-1">
				<div className="flex gap-2 flex-col lg:gap-4 w-full">
					<div className="flex flex-col gap-2 lg:gap-4 w-full lg:flex-row">
						<Input
							placeholder="Full Name"
							sx="w-full"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
						/>
						<Input
							placeholder="Email"
							sx="w-full"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<Textarea
						placeholder="Message"
						rows={5}
						name="message"
						value={formData.message}
						onChange={handleChange}
					/>
					{/* <ReCAPTCHA
						sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY}
						onChange={handleCaptchaChange}
					/> */}
					<button
						className="ff-against bg-primary rounded-xl p-3 md:p-4 mt-5 md:mt-10"
						onClick={handleSendMail}
					>
						Send
					</button>
				</div>
			</div>
			<div className="md:order-1">
				<img
					src={mainImage}
					className="h-[30rem] object-contain scale-x-[-1] ms-auto me-10"
					alt=""
				/>
			</div>
		</section>
	)
}
