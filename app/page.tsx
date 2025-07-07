import Header from './components/Header'
import Section from './components/Section'
import ProjectCard from './components/ProjectCard'
import NavBar from './NavBar'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen font-sans text-gray-800">
      <div className="max-w-5xl mx-auto p-6">
    
        <Header />

        <Section title="Professional Summary">
          <p className="text-lg leading-relaxed">
            I’m a results-driven <strong>Mobile App Developer</strong> with over 6 years of experience
            in React Native, Flutter, and Android. I specialize in building cross-platform apps with
            beautiful UI, RESTful integrations, and solid architecture.
          </p>
        </Section>

        <Section title="Technical Skills">
          <div className="flex flex-wrap gap-2">
            {[
              'React Native', 'Flutter', 'Kotlin', 'Redux', 'Bloc', 'Firebase',
              'SQLite', 'MySQL', 'Retrofit', 'Axios', 'Spring Boot', 'Next.js',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Professional Experience">
          <div className="space-y-6">
            {[
              {
                role: 'Mobile App Developer',
                company: 'Koovers',
                duration: 'Jan 2022 – Mar 2025',
                details:
                  'React Native apps for logistics, CRM, and delivery. Integrated Firebase, payments, and location tracking.',
              },
              {
                role: 'Android Developer',
                company: 'Kalyani Motors',
                duration: 'Mar 2020 – Apr 2021',
                details:
                  'Health screening and service apps using Retrofit and Flutter for iOS deployment.',
              },
              {
                role: 'Android Developer',
                company: 'Fixx Group LLP',
                duration: 'Jun 2018 – Jul 2019',
                details:
                  'Secure attendance and quiz apps with Razorpay and PayPal integration.',
              },
              {
                role: 'Android Developer',
                company: 'Soptech Solutions',
                duration: 'Jan 2018 – Jun 2018',
                details: 'Feedback and billing apps using PhoneGap and Cordova.',
              },
            ].map(({ role, company, duration, details }, i) => (
              <div key={i} className="bg-white shadow-md p-4 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg">{role} @ {company}</h3>
                <p className="text-sm text-gray-500">{duration}</p>
                <p className="mt-2">{details}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <div className="bg-white p-4 rounded-xl shadow-md border-l-8 border-green-400">
            <h3 className="font-semibold">B.E. in Computer Science</h3>
            <p className="text-gray-600">Tontadarya College of Engineering, VTU - 2014</p>
          </div>
        </Section>

        <Section title="Highlighted Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectCard
              title="Kalyani Health App"
              link="https://play.google.com/store/apps/details?id=com.kalyani_motors.health"
            />
            <ProjectCard
              title="NumeroFacts"
              link="https://www.appbrain.com/app/number-facts/com.ashraf.ashraf.factonumero"
            />
            <ProjectCard
              title="Roll Me – Short Video App"
              link="https://play.google.com/store/apps/details?id=com.autoforce.rollme"
            />
            <ProjectCard
              title="Autoforce Laps"
              link="https://play.google.com/store/apps/details?id=com.gps.core.autoforce"
            />
          </div>
           
        </Section>
           <NavBar/>
      </div>
    </div>
  )
}
