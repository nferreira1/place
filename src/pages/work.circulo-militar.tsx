import { HR, Img, Main, P, Section, SubTitle, Title, UL } from "@/components/html";
import { useIntlayer } from "react-intlayer";
import { Link } from "react-router-dom";

export function WorkCirculoMilitar() {
	const content = useIntlayer("work-circulo-militar");

	document.title = `Work | ${content.title.value}`;

	return (
		<Main>
			<Section>
				<Title text={content.title.value} />
			</Section>

			<Section>
				<div>
					<SubTitle text={content.currentPeriod.value} />
					<SubTitle text={content.currentRole.value} />
				</div>

				<P>{content.currentDescription.value}</P>
			</Section>

			<Section>
				<SubTitle text={content.systemsTitle.value} />

				<Section>
					<SubTitle text={content.qrcodeAppTitle.value} />

					<P>{content.qrcodeAppDescription.value}</P>

					<div className="bg-primary-foreground/10 flex gap-2 rounded p-2">
						{Array.from({ length: 7 }, (_, i) => (
							<Link
								to={`/images/qrcodeapp/light/0${i + 1}.png`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Img src={`/images/qrcodeapp/light/0${i + 1}.png`} />
							</Link>
						))}
					</div>

					<div className="bg-primary-foreground/10 flex gap-2 rounded p-2">
						{Array.from({ length: 7 }, (_, i) => (
							<Link to={`/images/qrcodeapp/dark/0${i + 1}.png`} target="_blank" rel="noopener noreferrer">
								<Img src={`/images/qrcodeapp/dark/0${i + 1}.png`} />
							</Link>
						))}
					</div>
				</Section>

				<HR />

				<Section>
					<SubTitle text={content.schedulingTitle.value} />

					<P>{content.schedulingDescription.value}</P>

					{Array.from({ length: 7 }, (_, i) => (
						<div className="bg-primary-foreground/10 rounded p-2">
							<Link
								to={`/images/scheduling-system/0${i + 1}.png`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Img
									key={`/images/scheduling-system/0${i + 1}.png`}
									src={`/images/scheduling-system/0${i + 1}.png`}
								/>
							</Link>
						</div>
					))}
				</Section>

				<HR />

				<Section>
					<SubTitle text={content.portalTitle.value} />

					<P>{content.portalDescription.value}</P>

					<UL>
						{content.portalModules.map((module, index) => (
							<li key={index}>
								<span className="font-semibold">{module.title.value}</span>
								{module.description.value}
							</li>
						))}
					</UL>

					{Array.from({ length: 8 }, (_, i) => (
						<div className="bg-primary-foreground/10 rounded p-2">
							<Link
								to={`/images/internal-systems-portal/0${i + 1}.png`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Img
									key={`/images/internal-systems-portal/0${i + 1}.png`}
									src={`/images/internal-systems-portal/0${i + 1}.png`}
								/>
							</Link>
						</div>
					))}
				</Section>
			</Section>

			<HR />

			<Section>
				<div>
					<SubTitle text={content.internshipPeriod.value} />
					<SubTitle text={content.internshipRole.value} />
				</div>

				{content.internshipDescriptions.map((description, index) => (
					<P key={index}>{description.value}</P>
				))}
			</Section>
		</Main>
	);
}
