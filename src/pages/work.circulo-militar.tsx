import { HR, Img, Main, P, Section, SubTitle, Title, UL } from "@/components/html";

export function WorkCirculoMilitar() {
	document.title = "Work | Círculo Militar de São Paulo";

	return (
		<Main>
			<Section>
				<Title text="Círculo Militar de São Paulo" />
			</Section>

			<Section>
				<div>
					<SubTitle text="January 2024 - Present" />
					<SubTitle text="Developer" />
				</div>

				<P>
					Worked as a full-stack developer at Círculo Militar de São Paulo, focusing on building internal
					systems and custom applications using technologies such as Java, JavaScript/TypeScript, Go, Node.js,
					Bun, React, SolidJS, Electron, and React Native. Responsible for the architecture, development, and
					maintenance of multiple projects, integrated with AWS, messaging using RabbitMQ, and modern CI/CD
					practices.
				</P>

				{/* <P>
					On the frontend, building rich and accessible user interfaces with React (Next.js, React Router,
					Remix) and SolidJS, along with desktop applications using Electron and mobile apps with React
					Native. Work emphasizes componentization, reusability, and performance.
				</P>
				<P>
					Involved in multi-tenant architecture, messaging with RabbitMQ, and integration with cloud services,
					primarily AWS (EC2, S3, RDS, Lambda, SQS, CloudWatch). Also responsible for CI/CD, automation,
					monitoring, and development best practices.
				</P>
				<P>
					Technical lead of the SchoolTrack project, a school management platform developed at N4nLabs,
					focused on quality, scalability, and user experience.
				</P> */}
			</Section>

			<Section>
				<SubTitle text="Some of the systems I have built and maintain:" />

				<Section>
					<SubTitle text="QRCodeApp" />

					<P>
						Mobile app built with React Native for access control via QR code scanning. Automated member and
						visitor entry, integrated with internal databases and admin systems.
					</P>

					<div className="bg-primary-foreground/10 flex gap-2 rounded p-2">
						{Array.from({ length: 7 }, (_, i) => (
							<div>
								<Img
									key={`/images/qrcodeapp/light/0${i + 1}.png`}
									src={`/images/qrcodeapp/light/0${i + 1}.png`}
								/>
							</div>
						))}
					</div>

					<div className="bg-primary-foreground/10 flex gap-2 rounded p-2">
						{Array.from({ length: 7 }, (_, i) => (
							<div>
								<Img
									key={`/images/qrcodeapp/dark/0${i + 1}.png`}
									src={`/images/qrcodeapp/dark/0${i + 1}.png`}
								/>
							</div>
						))}
					</div>
				</Section>

				<HR />

				<Section>
					<SubTitle text="Scheduling System" />

					<P>
						Web platform for booking club spaces and activities, featuring real-time availability, business
						logic, and notifications.
					</P>

					{Array.from({ length: 7 }, (_, i) => (
						<div className="bg-primary-foreground/10 rounded p-2">
							<Img
								key={`/images/scheduling-system/0${i + 1}.png`}
								src={`/images/scheduling-system/0${i + 1}.png`}
							/>
						</div>
					))}
				</Section>

				<HR />

				<Section>
					<SubTitle text="Internal Systems Portal" />

					<P>Unified portal containing several operational modules:</P>

					<UL>
						<li>
							<span className="font-semibold">Parcel Management:</span> Logging, notifying, and releasing
							member deliveries.
						</li>
						<li>
							<span className="font-semibold">Lost and Found:</span> Item registration, tracking, and
							history.
						</li>
						<li>
							<span className="font-semibold">Playroom:</span> Entry/exit tracking, duration, and guardian
							control.
						</li>
						<li>
							<span className="font-semibold">Nursery:</span> Attendance and scheduling management.
						</li>
					</UL>

					{Array.from({ length: 8 }, (_, i) => (
						<div className="bg-primary-foreground/10 rounded p-2">
							<Img
								key={`/images/internal-systems-portal/0${i + 1}.png`}
								src={`/images/internal-systems-portal/0${i + 1}.png`}
							/>
						</div>
					))}
				</Section>
			</Section>

			<HR />

			<Section>
				<div>
					<SubTitle text="January 2023 - December 2023" />
					<SubTitle text="Software Development Internship" />
				</div>

				<P>Worked on web application development with a focus on building user interfaces using React.</P>

				<P>
					Responsible for implementing reusable components, fixing bugs, performing manual testing, and
					maintaining legacy systems. Participated in code reviews and integrated frontend features with
					RESTful APIs.
				</P>

				<P>
					Supported tasks involving Git version control, issue tracking, and collaborated with the development
					team in an agile environment.
				</P>
			</Section>
		</Main>
	);
}
