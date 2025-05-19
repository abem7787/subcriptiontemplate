import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  Button,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

const articles = [
  {
    id: 1,
    title:
      "Advance Biomass purifcations: Smart App For Rapid Infrared Technology",
    content: [
      {
        subtitle: "Introduction: Embracing Innovation",
        text: "If you are a forward-thinker entrepreneur that takes practical steps to reduce commercial costs and improve efficiency, this analogy is for you. Please bear with me. Although at first glance the title induces a pilot deployment, it will suit your enterprise need. The concept, will help you learn the potential of machine learning capabilities and how it can scale within enterprise manchinary & logistics. Without overwhelming you with technical terms, let's understand the basic MVP concept as I guide you in the machine learn integration with a Smart App and Rapid Infrared Technology.",
      },
      {
        subtitle: "Setting the Context: A Science Experiment",
        text: "  Purely a science experiment not recommend anyone to do this at home. I’m a bit of a nerd who loves solving issues with software and that is much as I go with telling you on the seed of my abilties. Haven't said that, the project entails in how we can scan biomass for inpurites to later use it for bio oil. Its important to scan unwanted metals, water, in such biomass like seaweed to indeed  demonstrate with emprical evidence that seaweed can be use for organic combustable oil. The with visuals of theses aspects will be demonstrate but in a very small scale, taking notes and video of rigerous methods in the future, so stay tune. This soley a theis for now, as its been proven to be done by ivy-leaguers and other reasearchers alike, but to get straigt to the point of what we trying to come across. In this sceario, we are choosing hardware and software technology to fuse with ml algorithims to give me us the most purest bio oil.  What is biomass and combustion, and how do we integrate infrared hardware to detect why certain  impruites may cause failure in combustion? We will also explore how an ML model can solve this issue.",
      },
      {
        subtitle: "Understanding Biomass and Combustion",
        text: "Let’s begin by asking ourselves: what is biomass? And what does it include. Includes wood, seaweed, food scraps, corn stalks, and animal waste, and simple organic materials. When processed correctly, these materials can be used for combustion to create fuel. Combustion is the chemical reaction where fuel burns in oxygen to produce heat and light burning, like wood in a fire. Fossil fuels burn similarly inside engines, producing carbon dioxide as a byproduct. Why choose biomass over fossil fuels? Biomass absorbs CO2 while combusting, offering a cleaner energy alternative.",
      },
      {
        subtitle: "Why Choose Biomass Over Fossil Fuels?",
        text: "Biomass, agricultural waste and organic resources, can be regrown. With fossil fuels like coal, and natural gas takes over a century to form and resources will burn out eventually and runout. On the other hand, The CO₂ released when burning biomass equals the CO₂ absorbed by growing new plants. Unlike fossil fuels, the C02 increases and becomes more of the greenhose effect making the issue longterm and immutable. The contrast of burning release CO₂ is what makes this project a bit more daring and challenging, but can apply in most business usecase.",
      },
      {
        subtitle: "ML and discovering the challenge of Biomass and combustion",
        text: "To evaluate the effectiveness of this system, I will follow a scientific approach by conducting a small, in-home experimental project. The focus is on transforming solid biomass referred to as bio-oil and exploring its potential real world use cases. To keep things practical and affordable, I will demonstrate the application using a simple two stroke moped engine. This low-cost method allows learning about both the capabilities and limitations of biomass based combustion.",
      },
      {
        text: "One of the core challenges in pyrolysis the thermal decomposition of organic matter in the absence of oxygen is the presence of impurities. These can include salts, mud, water, sodium, chloride, heavy metals, and other unwanted materials that interfere with efficient combustion and can damage an engine over time.",
      },
      {
        text: "Our proposed solution involves infrared sensing and spectroscopy, which leverages the absorption and emission of light and other radiation to detect and separate impurities. Each type of biomass emits a unique spectral signature, or fingerprint. By using sensors to scan biomass samples and collect spectral data, we can classify the material as clean, contaminated, or metal contaminated. We can use methods such as QR codes to collect and easy to scan data to comparmentalize each fingerprint",
      },
      {
        text: "Machine learning techniques such as Support Vector Machines (SVMs), Random Forests, or Neural Networks are then trained on this labeled spectral data. These models learn to classify impurities based on subtle differences in spectral patterns. Once trained, the system can perform real time impurity detection and sorting both before and after pyrolysis.",
      },
      {
        text: "While infrared spectrometers and ML infrastructure are not commonly used in real-world small scale biomass operations due to high costs, the project aims to simulate and validate this concept on a more accessible level. The moped engine will serve as a practical demonstration of how such a solution could be adapted to real-world applications. I will demonstrate in the near future how we can apply bio-oil in a moped with simplfied version of prolaysis",
      },
      {
        subtitle: "Predictive Analytics In Business",
        text: {
        text: "In a manufacturing context, for instance, if an ML model identifies impurities in raw materials through infrared sensor data, it can automatically trigger predefined business logic—such as rejecting the batch, alerting a technician, or recalibrating machinery. This seamless integration of data and decision-making helps reduce downtime, improve product quality, and increase customer satisfaction.",
        text: "Machine learning is revolutionizing business operations by making processes smarter and more efficient. Whether it's predicting customer behavior, optimizing inventory, or detecting defects such as inpurties, ML algorithms analyze historical and real-time data to automate, and sharply detect, making aproachable behavioral decisions that traditionally required human input.",
        },
      },
    
      {
        subtitle: "In conclusion",
        text: "Integrating machine learning into business operations is no longer just an innovation. It's a strategic necessity. By converting raw data into actionable, real time decisions, companies can handle workflows smarter, minimize unorganic error, and gain a competitive insight.",
      },
      {
        text: "Whether it's enhancing quality control, personalizing user experiences, or managing supply chains, ML driven automation empowers businesses to respond more intelligently to challenges and opportunities. As the technology continues to mature, organizations that embrace machine learning today will be the ones leading their industries tomorrow.",
      },
    ],
    excerpt:
      "Cleaner Fuel Production, seaweed and sensor Hardware for biomass project. Now with the revolutioono of AI. We can put its logic to the test. Idenrifying inpuries and providing raw biomass for cleaner approcah for fuel. If you are a forward-thinker, and intrigue with imaginative steps to refine fuel cost, and clean air. This artcile is for you. Although the pilot deployment does not suit your enterprise taste, you can still learn the potential of machine learning capabliites, and how to scale within your bussiness logistics. Without overwhelming with      Basic MVP concept with ML intergration. What is Biomass, its not only wood chips we seen as kids in the playground, its unconvential organic waste, that aborb carbon, and agricultural byproducts. Your probally askking, oh this sound great, but if its so clean and promising why are we not using it now or why are certain countries expoermenitng further. Well here is a thoughtful explanation, high intial invesment. leading to less viable soltuion. Now that you are aware, what is Biomass. Biomass, including seaweed and other organic materials, is composed of various chemical and physical components that determine how well it performs as a fuel. Knowing these components helps optimize combustion efficiency and minimize pollutants. Here are the key elements to consider: <  <br> Theses are componds that vaporize when biomass is heated. Volatile matter ingites easly, helps sybstain combustion",
    category: "ML & Science",
    date: "May 15, 2025",
    featured: true,
  },
  {
    id: 2,
    title: "Comming soon",
    content: "Full article coming soon",
    excerpt:
      "Best practices for architecting React applications that scale with your user base.",
    category: "Web Development",
    date: "April 28, 2023",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <Container className="pt-5">
        <h3>Article not found</h3>
        <Button color="info" tag={Link} to="/blog">
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <>
      <DemoNavbar />
      <main className="pt-7">
        <Container>
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="shadow border-0 mb-5">
                <CardBody className="p-5">
                  <Badge color="info" pill className="mb-2">
                    {article.category}
                  </Badge>
                  <p className="text-muted small">{article.date}</p>
                  <CardTitle tag="h2">{article.title}</CardTitle>
                  {Array.isArray(article.content) ? (
                    article.content.map((section, index) => (
                      <div key={index} className="mb-4">
                        {section.subtitle && (
                          <h5 className="mb-2">{section.subtitle}</h5>
                        )}
                        <CardText>
                          {typeof section.text === "string"
                            ? section.text
                            : section.text && typeof section.text.text === "string"
                            ? section.text.text
                            : ""}
                        </CardText>
                      </div>
                    ))
                  ) : (
                    <CardText>{article.content}</CardText>
                  )}
                  <Button color="primary" tag={Link} to="/blog">
                    Back to Blog
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <CardsFooter />
    </>
  );
};

export default ArticlePage;
