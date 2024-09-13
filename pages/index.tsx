import Image from "next/image";
// import localFont from "next/font/local";
import Head from "next/head";
import Navigation from "./components/Navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("./components/ProjectCard"));


export default function Home() {
  return (
    <>
      <Head>
        <title>Amartuvshin Altangerel - Data Scientist/Analyst</title>
        <meta
          name="description"
          content="Experienced Data Analyst/Scientist skilled in Python, machine learning, and backend development."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.difyChatbotConfig = {
                token: "rfJU6VYJhUlbEUdJ"
              }
            `,
          }}
        />
        <script
          src="https://udify.app/embed.min.js"
          id="rfJU6VYJhUlbEUdJ"
          defer
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #dify-chatbot-bubble-button {
                background-color: #1C64F2 !important;
              }
            `,
          }}
        />
      </Head>
      <div id="home" className="max-w-5xl mx-auto font-sans min-h-screen p-4 sm:p-8 lg:p-12">
        <header>
          <Navigation />
        </header>
        <main className="flex flex-col items-center text-center sm:text-left sm:items-start mt-8 sm:mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between sm:items-start gap-4 sm:gap-8">
            <div>
              <h2 className="text-lg sm:text-xl text-gray-600">Data Scientist/Analyst</h2>
              <h1 className="text-4xl sm:text-6xl font-bold mt-3 text-gray-800">
                Hello, I&apos;m<br />
                <span className="text-blue-600">Amartuvshin</span>
              </h1>
              <p className="mt-4 sm:mt-7 mx-auto sm:mx-0 items-center w-11/12 sm:max-w-xl text-gray-700">
                Experienced Data Analyst/Scientist skilled in Python, machine learning, and backend development. Proven track record in leveraging data insights to drive business decisions and optimize processes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-10">
                <a
                  href="/Amartuvshin Altangerel Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                >
                  Download CV <LuDownload size={14} className="ml-2" />
                </a>
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/amartuvshin-altangerel-6b88082b8/"
                    target="_blank"
                    className="inline-flex items-center bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaLinkedin size={21} />
                  </a>
                  <a
                    href="https://github.com/Amaraa0611"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex items-center bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 relative mt-8 sm:mt-0">
              <div className="absolute inset-0 rounded-full shadow-inner-custom"></div>
              <div className="relative w-[220px] h-[220px] sm:w-[400px] sm:h-[400px]">
                <Image
                  src="/amra-home-page-image.png"
                  alt="Amara"
                layout="responsive"
                  width={400}
                  height={400}
                  className="rounded-full"
                  priority
                />
                {/* <Image
                  className="animate-spin-slow"
                  src="/border.svg"
                  alt="Border svg"
                  layout="fill"
                  objectFit="cover"
                /> */}
              </div>
            </div>
          </div>
        </main>

        <section className="mt-8 sm:mt-16 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-800">5</h3>
              <p className=" text-left text-sm sm:text-base text-gray-700">Years of <br />experience</p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-800">8</h3>
              <p className="text-left text-sm sm:text-base text-gray-700">Technologies <br />mastered</p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-800">1</h3>
              <p className="text-left text-sm sm:text-base text-gray-700">HackAIthon <br />conquered</p>
            </div>
            <div className="flex items-center gap-4">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-800">#1</h3>
              <p className="text-left text-sm sm:text-base text-gray-700">Project Team <br />at Khanbank 2023</p>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section id="projects" className="mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Involved projects</h2>
          
          {/* Software Development Projects */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Software Development Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ProjectCard
              title="The Risk Management System"
              description="An internal web application used by Khanbank employees to monitor and evaluate customer-related risk factors, including behavioral scores. Additionally, the system provides functionalities for estimating corporate customers loan limits. It also serves as a primary tool for recording and managing actions taken during the debt collection process."
              imageSrc="/Flask_logo.png"
            />
            <ProjectCard
              title="Digital Loan Project"
              description="This project involved transforming traditional retail loan applications into a fully online process. Historically, calculating customer loan limits relied on complex formulas in Excel across various branches. My role was to ensure that the new online loan calculation system produced results consistent with traditional Excel calculations. To achieve this, I developed an automated testing process using over 1,000 test cases. This was implemented using Python libraries such as OpenPyXL, Pandas, and NumPy, along with tools like python requests to streamline and validate the accuracy of loan calculations efficiently."
              imageSrc="/Openpyxl_logo.png"
            />
          </div>

          {/* Machine Learning Projects */}
          <h3 className="text-2xl sm:text-3xl font-bold mt-12 mb-4 text-gray-800">Machine Learning Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <ProjectCard
              title="Business Customer Identification Model"
              description="This classification model leverages transaction data (including amount, frequency, and transaction description) to identify customers engaged in business activities and determine their business sectors. Using XGBoost, the model was developed to classify customers effectively based on their transaction patterns. It plays a critical role in the banks online loan approval process for business loans, enabling more targeted and efficient lending decisions. I served as the lead data scientist on this project, overseeing the development and deployment of the model to ensure its accuracy and reliability."
              imageSrc="/Xgbooost_logo.png"
            />
            <ProjectCard
              title="Family Linkage Model"
              description="This model identifies bank customers relatives and spouses by analyzing transaction data patterns. Using a classification approach with XGBoost, the model successfully discerns familial relationships based on shared transactions, frequency, and other transaction characteristics. The insights derived from this model help in providing personalized services and understanding customer networks as well as debt collection. I played a pivotal role as the lead data scientist in this project, overseeing the development, training, and implementation of the model to ensure its accuracy and effectiveness."
              imageSrc="/Xgbooost_logo.png"
            />
            <ProjectCard
              title="Deposit Balance Prediction"
              description="This project aimed to predict future deposit balances for SME and corporate customers using various time series forecasting techniques. Recognizing that customer deposits are crucial to the banks operations, we developed a predictive tool to identify periods when customers are likely to have low balances, allowing the bank to proactively engage with them. We evaluated multiple time series forecasting methods, including ARIMA, XGBoost, and LSTM. After thorough comparison, LSTM was selected due to its superior performance in capturing complex patterns in the data. As the lead data scientist on this project, I was responsible for model development, evaluation, and implementation."
              imageSrc="/LSTM_logo.png"
            />
            <ProjectCard
              title="Behavioral Scoring Model"
              description="This model is designed to predict the likelihood of retail customers repaying their loans based on their transaction data. The project was developed in collaboration with Visa Corporation, leveraging their expertise in behavioral analytics. My role involved coordinating between the Visa team and Khan Banks internal team during the early stages of the project, ensuring effective communication and alignment of goals. This model enables the bank to better assess customer credit risk and make informed lending decisions."
              imageSrc="/Logreg_logo.png"
            />
          </div>
        </section>
      </div>
    </>
  );
}
