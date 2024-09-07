import Container from "../components/container/Container"
import ExperienceSummary from "./ExperienceSummary"
import Summary from "../home/Summary"

export default function AboutMe() {

  return <>
    <div className="flex flex-row">
      <div className="basis-1/4">
        <Summary />
      </div>
      <div className="basis-3/4">
        <Container title={"About Me"}>A skilled software developer with 12 years of experience working mainly with JavaScript based frameworks and technologies.
          Experienced in leading architectural discussions and designs, prototyping and researching ideas which I consider about myself as the main factor which sets me apart
          from my peers.
        </Container>
        <Container title={"Summary of Experience"} className="mt-4">
          <ExperienceSummary />
        </Container>
        <Container title={"Skillset"} className="mt-4">A skilled software developer with 12 years of experience working mainly with JavaScript based frameworks and technologies.
          Experienced in leading architectural discussions and designs, prototyping and researching ideas which I consider about myself as the main factor which sets me apart
          from my peers.
        </Container>
      </div>
    </div>

  </>
}